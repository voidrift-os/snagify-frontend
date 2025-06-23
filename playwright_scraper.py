
import asyncio
from playwright.async_api import async_playwright
import json

ASIN_LIST = [
    "B071Y3MSRK",
    "B0D4215HCX",
    "B09B2QTGFY",
    "B09WNK39JN",
    "B07MP7CPFZ"
]

BASE_URL = "https://www.amazon.com/dp/{}"
OUTPUT_FILE = "scraped_products.json"

async def scrape():
    scraped_data = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        for asin in ASIN_LIST:
            url = BASE_URL.format(asin)
            print(f"Scraping: {url}")
            product = {
                "title": "No title found",
                "image": "No image",
                "price": "N/A",
                "affiliate_url": f"{url}?tag=snagifyco-20",
                "category": "Tech & Gadgets",
                "description": "Snag this find before it’s gone!"
            }

            try:
                await page.goto(url, timeout=30000)

                # Try different methods to get the title
                try:
                    product["title"] = await page.locator("#productTitle").inner_text(timeout=10000)
                except:
                    try:
                        product["title"] = await page.locator("input[name='productTitle']").get_attribute("value", timeout=10000)
                    except:
                        try:
                            product["title"] = await page.title()
                        except:
                            product["title"] = "Title not found"

                # Get image
                try:
                    product["image"] = await page.locator("#landingImage").get_attribute("src")
                except:
                    product["image"] = "No image"

                # Get price
                try:
                    product["price"] = await page.locator(".a-price .a-offscreen").first.inner_text()
                except:
                    product["price"] = "N/A"

            except Exception as e:
                print(f"Error scraping {url}: {e}")

            scraped_data.append(product)

        await browser.close()

        with open(OUTPUT_FILE, "w") as f:
            json.dump(scraped_data, f, indent=2)
        print(f"✅ Done. Products saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    asyncio.run(scrape())

