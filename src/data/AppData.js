import boatLogo from "../assets/productLogo/boat-logo.png"
import hihonorLogo from "../assets/productLogo/hihonor-logo.png"
import oppoLogo from "../assets/productLogo/oppo-logo.png"
import realmeLogo from "../assets/productLogo/realme-logo.png"
import samsungLogo from "../assets/productLogo/samsung-logo.png"
import sonyLogo from "../assets/productLogo/sony-logo.png"
import vivoLogo from "../assets/productLogo/vivo-logo.png"
import motorolaLogo from "../assets/productLogo/motorola.png"
import AppleiWatchSeProduct from "../assets/product/APPLE-Watch-SE-GPS(2nd Gen).webp"
import APPLEAirpodsMaxProduct from "../assets/product/APPLEAirpodsMax.webp"
import AppleiPhone12Product from "../assets/product/AppleiPhone12.png"
import OnePlusBandProduct from "../assets/product/OnePlusBand.webp"
import BoatStormCallProduct from "../assets/product/boAt-Storm-call.webp"
import boAtRockerz510Product from "../assets/product/boAtRockerz510.webp"
import onePlusNord2T5GProduct from "../assets/product/onePlusNord2T5G.webp"
import realmeTechLifeWatchS100Product from "../assets/product/realme-TechLife-Watch-S100.webp"
import RealmeC55Product from "../assets/product/realme-c55-1.jpg"
import realmeBudsAir2Product from "../assets/product/realmeBudsAir2.webp"
import vivo2TX5GProduct from "../assets/product/vivo2TX5G.webp"
import wirelessZ2Product from "../assets/product/wireless-z2-oneplus.webp"

export const Appdata = {
  menuList: [
    { text: "Home", link: "#home", type: "list" },
    { text: "Products", link: "#product", type: "list" },
    { text: "About", link: "#about", type: "list" },
    { text: "Contact", link: "#cotact", type: "list" },
    { text: "Get Started", link: "#about", type: "button" }
  ],
  productLogoSlider: [
    {
      imgURL: boatLogo
    },
    {
      imgURL:hihonorLogo
    },
    {
      imgURL: oppoLogo
    },
    {
      imgURL: realmeLogo
    },
    {
      imgURL: samsungLogo
    },
    {
      imgURL: sonyLogo
    },
    {
      imgURL: vivoLogo
    },
    {
      imgURL: motorolaLogo
    }
  ],
  productFilterList: [
    { text: "All", value: "all" },
    { text: "Headphone", value: "headphone" },
    { text: "Mobile", value: "mobile" },
    { text: "Smart Watches", value: "watch" }
  ],
  productList: [
    {
      imaURL: AppleiPhone12Product,
      title: "Realme C55",
      type: "mobile",
      featuresList: [
        { bold: true, text1: "64 GB ", text2: "ROM" },
        { text: "15.49 cm (6.1 inch) Super Retina XDR Display" },
        { text: "12MP + 12MP | 12MP Front Camera" },
        { text: "A14 Bionic, Next Generation Neural Engine Processor" },
        { text: "All Screen OLED Display" }
      ]
    },
    {
      imaURL: APPLEAirpodsMaxProduct,
      title: "APPLE Airpods Max Bluetooth Headset",
      type: "headphone",
      featuresList: [
        { text: "Color : Pink" },
        { text: "Bluetooth version: 5" },
        { text: "Battery Runtime: 20 Hrs." },
        {
          text: "Active Noise Cancellation blocks outside noise, so you can immerse yourself in music"
        }
      ]
    },
    {
      imaURL: AppleiWatchSeProduct,
      title: "APPLE Watch SE GPS 2nd Gen",
      type: "watch",
      featuresList: [
        { text: "Retina LTPO OLED display" },
        { text: "Touchscreen" },
        { text: "Fitness & Outdoor" },
        { text: "Battery Runtime: Upto 18 hrs" },
        { text: "Color : White" },
        { text: "Size : 40mm" }
      ]
    },
    {
      imaURL: RealmeC55Product,
      title: "Realme C55",
      type: "mobile",
      featuresList: [
        { bold: true, text1: "RAM : ", text2: "4GB / 6GB / 8GB" },
        { bold: true, text1: "ROM : ", text2: "64GB / 128GB" },
        { text: "17.07 cm (6.72 inch) Full HD+ Display" },
        { text: "64MP + 2MP | 8MP Front Camera" },
        { text: "5000 mAh Battery" },
        { text: "Helio G88 Processor" }
      ]
    },
    {
      imaURL:realmeBudsAir2Product,
      title: "Realme Buds Air 2",
      type: "headphone",
      featuresList: [
        { text: "Color : Closer Black" },
        { text: "Bluetooth version: 5.2" },
        { text: "Wireless range: 10 m" },
        { text: "Battery life: 25 hrs | Charging time: 2 hrs" },
        {
          text: "IPX5 Water Resistance | Dual Mic Noise Cancellation for Calls"
        }
      ]
    },
    {
      imaURL: realmeTechLifeWatchS100Product,
      title: "Realme TechLife Watch S100 ",
      type: "watch",
      featuresList: [
        { text: "4.3 cm (1.69 inch) TFT-LCD Super Bright HD Colour Display" },
        { text: "Battery Runtime: Upto 12 days" },
        { text: "Fitness & Outdoor, Health & Medical" },
        { text: "Body & Skin Temperature Sensor" }
      ]
    },
    {
      imaURL: onePlusNord2T5GProduct,
      title: "OnePlus Nord 2T 5G",
      type: "mobile",
      featuresList: [
        { bold: true, text1: "RAM : ", text2: "8GB" },
        { bold: true, text1: "ROM : ", text2: "128GB" },
        { text: "17.02 cm (6.7 inch) Display" },
        { text: "50MP Rear Camera" },
        { text: "4500 mAh Battery " },
        { text: "MediaTek Dimensity 1300" }
      ]
    },
    {
      imaURL: wirelessZ2Product,
      title: "OnePlus Bullets Wireless Z2",
      type: "headphone",
      featuresList: [
        { text: "Color : Acoustic Red" },
        { text: "Bluetooth version: 5" },
        { text: "Bullets Wireless Z2" },
        { text: "Battery life: 20 hrs | Charging time: 10 hrs" },
        { text: "1 Year Warranty" }
      ]
    },
    {
      imaURL: OnePlusBandProduct,
      title: "OnePlus Band (Black Strap)",
      type: "watch",
      featuresList: [
        { text: "Size : Regular" },
        { text: "AMOLED Display" },
        {
          text: "Blood Oxygen Saturation Monitoring (SPO2), Sleep & Heart Rate Tracking"
        },
        { text: "13 Exercise Modes" },
        { text: "Water Resistant" }
      ]
    },
    {
      imaURL: vivo2TX5GProduct,
      title: "VIVO 2T X 5G",
      type: "mobile",
      featuresList: [
        { bold: true, text1: "RAM : ", text2: "8GB" },
        { bold: true, text1: "ROM : ", text2: "128GB" },
        { text: "16.71 cm (6.58 inch) Full HD+ Display" },
        { text: "50MP + 2MP | 8MP Front Camera" },
        { text: "5000 mAh Battery" },
        { text: "Dimensity 6020 Processor" }
      ]
    },
    {
      imaURL: boAtRockerz510Product,
      title: "boAt Rockerz 510 Super Extra Bass",
      type: "headphone",
      featuresList: [
        { text: "Color : Molten Orange" },
        { text: "Bluetooth version: 4.1" },
        { text: "Wireless range: 10 m" },
        { text: "Battery life: 20 hrs | Charging time: 2.5 hrs" },
        { text: "Using simple touch controls answer phone calls" }
      ]
    },
    {
      imaURL: BoatStormCallProduct,
      title: "boAt Storm call",
      type: "watch",
      featuresList: [
        { text: "Color : Pink" },
        { text: "Size : Free Size" },
        { text: "1.69 inch HD display with Bluetooth Calling" },
        { text: "550 Nits Brightness" },
        {
          text: "Smartwatch, Magnetic Charging Cable, User Manual, Warranty Card"
        }
      ]
    }
  ]
};
