# category_scraper.py
import json
import asyncio
import json
from playwright.async_api import async_playwright

# Define your categories and search keywords
categories = {
    "Tech & Gadgets": "tech+gadgets",
    "Home & Garden": "home+garden",
    "Fashion": "fashion",
    "Fitness": "fitness",
    "Gaming": "gaming",
    "Outdoor": "outdoor",
    "Automotive": "car+accessories",
    "Lifestyle": "lifestyle",
}

BASE_URL = "https://www.amazon.com/s?k={query}"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}


async def scrape_asins():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False, slow_mo=250)
        context = await browser.new_context()
        page = await context.new_page()

        results = {}

        for category, keyword in categories.items():
            print(f"\n🔍 Scraping category: {category}")
            url = BASE_URL.format(query=keyword)

            try:
                await page.goto(url, timeout=30000)
                await page.wait_for_selector("a[href*='/dp/']", timeout=15000)

                asins = set()
                links = await page.locator("a[href*='/dp/']").element_handles()
                for link in links:
                    href = await link.get_attribute("href")
                    if href and "/dp/" in href:
                        asin = href.split("/dp/")[1].split("/")[0]
                        if len(asin) == 10:
                            asins.add(asin)

                print(f"📦 Found {len(asins)} ASINs in {category}")
                results[category] = list(asins)
            except Exception:
                print(f"❌ Timeout loading {category}")
                results[category] = []

        with open("asins_by_category.json", "w") as f:
            json.dump(results, f, indent=2)

        await browser.close()


if __name__ == "__main__":
    asyncio.run(scrape_asins())
