const Footer = () => {
  return (
    <div className="bg-Secondary-700 w-screen font-IranSans overflow-y-hidden pt-[60px] px-[108px]">
      <ul className="flex gap-10 text-white w-full ">
        <div>
          <p className="mb-4 list-none -mr-4">محبوب ترین ها</p>
          <ul className="flex list-disc flex-col gap-4">
            <li>لباس مردانه</li>
            <li>کفش فوتبال</li>
            <li>کفش فوتبال</li>
            <li>دوچرخه</li>
            <li>لباس زنانه</li>
          </ul>
        </div>
        <div>
        <p className="mb-4 list-none -mr-4">خدمات مشتریان</p>
        <ul className="flex list-disc flex-col gap-4">
            <li>سوالات متداول</li>
            <li>حریم خصوصی</li>
            <li>کفش فوتبال</li>
            <li>گزارش ایراد در سایت</li>
            <li>شرایط بازگرداندن محصول</li>
          </ul>
        </div>
        <div>
        <p className="mb-4 list-none -mr-4">راهنمای خرید</p>
        <ul className="flex list-disc flex-col gap-4">
            <li>راهنمای ثبت شفارش</li>
            <li>شیوه های پرداخت</li>
            <li>نحوه ارسال سفارش ها</li>
            <li>نحوه پیگیری محصول</li>
          </ul>
        </div>
        <div>
        <p className="mb-4 list-none -mr-4">اطلاعات تماس</p>
        <ul className="flex list-disc flex-col gap-4">
            <li>نشانی تهران-تجریش- خیابان سالور</li>
            <li>شماره تماس <span>021-3456789</span></li>
            <li>پست الکترونیکی <span>info@fitland.com</span></li>
            <li>ساعت کاری شنبه تا چهارشنبه 9 تا 17</li>
          </ul>
        </div>
      </ul>
      
    </div>
  );
};

export default Footer;
