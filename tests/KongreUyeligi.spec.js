const { test, expect } = require('@playwright/test');

test('Kongre üyeliği hatalı mail girişi', async ({ page }) => {
    await page.goto('/');
    await page.pause(); 
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="KULÜP"]').click();
    await page.locator('role=link[name="Online Üyelik"]').click();
    await page.locator('div:nth-child(3) > .item >> nth=0').click();
    await page.locator('role=textbox[name="Ad"]').type('test');
    await page.locator('role=textbox[name="Soyad"]').type('test');
    await page.locator('internal:label=E-Posta').type('a');
    await page.locator('internal:attr=[placeholder="(5XX) XXX-XXXX"i]').type('5338424105');
    await page.locator('internal:label=T.C Kimlik Numarası').type('11184209578');
    await page.locator('role=insertion >> nth=0').click();
    await page.locator('internal:label=Doğum Tarihi ( Gün / Ay / Yıl )').type('11.05.2000');
    await page.locator('internal:label=Doğum Yeri').type('İstanbul');
    await page.locator('span[role="textbox"]:has-text("Medeni Hali")').click();
    await page.locator('role=treeitem[name="Bekar"]').click();
    await page.locator('span[role="textbox"]:has-text("Kan Grubu")').click();
    await page.locator('role=treeitem[name="Arh+"]').click();
    await page.locator('span[role="textbox"]:has-text("Öğrenim Durumu")').click();
    await page.locator('role=treeitem[name="Lisans"]').click();
    await page.locator('internal:label=Anne Adı').type('test');
    await page.locator('internal:label=Baba Adı').type('test');
    await page.locator('span[role="textbox"]:has-text("Çalışma şekli seçiniz")').click();
    await page.locator('role=treeitem[name="Özel Sektör Ücretli"]').click();
    await page.locator('role=combobox[name="Sektör seçiniz"] >> span >> nth=2').click();
    await page.locator('role=treeitem[name="Araç/Filo Kiralama"]').click();
    await page.locator('span[role="textbox"]:has-text("Meslek/Ünvan seçiniz")').click();
    await page.locator('role=treeitem[name="Akademisyen"]').click();
    await page.locator('span[role="textbox"]:has-text("Branş seçiniz")').click();
    await page.locator('text=Şifre - Şifreniz en az 6 karakter uzunluğunda olmalıdır.').type('112102Cd');
    await page.locator('internal:label=Şifre Tekrar').type('112102Cd');
    await page.locator('role=insertion >> nth=2').click();
    await page.locator('role=button[name="DEVAM ET"]').click();
    await page.locator('text=Lütfen bilgileri eksiksiz giriniz.').elementHandle();

  });

  test('Kongre üyeliği hatalı telefon numarası girişi', async ({ page }) => {
    await page.goto('/');
    await page.pause(); 
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="KULÜP"]').click();
    await page.locator('role=link[name="Online Üyelik"]').click();
    await page.locator('div:nth-child(3) > .item >> nth=0').click();
    await page.locator('role=textbox[name="Ad"]').type('test');
    await page.locator('role=textbox[name="Soyad"]').type('test');
    await page.locator('internal:label=E-Posta').type('test@gmail.com');
    await page.locator('internal:attr=[placeholder="(5XX) XXX-XXXX"i]').type('589 777 77 77');
    await page.locator('internal:label=T.C Kimlik Numarası').type('11184209578');
    await page.locator('role=insertion >> nth=0').click();
    await page.locator('internal:label=Doğum Tarihi ( Gün / Ay / Yıl )').type('11.05.2000');
    await page.locator('internal:label=Doğum Yeri').type('İstanbul');
    await page.locator('span[role="textbox"]:has-text("Medeni Hali")').click();
    await page.locator('role=treeitem[name="Bekar"]').click();
    await page.locator('span[role="textbox"]:has-text("Kan Grubu")').click();
    await page.locator('role=treeitem[name="Arh+"]').click();
    await page.locator('span[role="textbox"]:has-text("Öğrenim Durumu")').click();
    await page.locator('role=treeitem[name="Lisans"]').click();
    await page.locator('internal:label=Anne Adı').type('test');
    await page.locator('internal:label=Baba Adı').type('test');
    await page.locator('span[role="textbox"]:has-text("Çalışma şekli seçiniz")').click();
    await page.locator('role=treeitem[name="Özel Sektör Ücretli"]').click();
    await page.locator('role=combobox[name="Sektör seçiniz"] >> span >> nth=2').click();
    await page.locator('role=treeitem[name="Araç/Filo Kiralama"]').click();
    await page.locator('span[role="textbox"]:has-text("Meslek/Ünvan seçiniz")').click();
    await page.locator('role=treeitem[name="Akademisyen"]').click();
    await page.locator('span[role="textbox"]:has-text("Branş seçiniz")').click();
    await page.locator('text=Şifre - Şifreniz en az 6 karakter uzunluğunda olmalıdır.').type('112102Cd');
    await page.locator('internal:label=Şifre Tekrar').type('112102Cd');
    await page.locator('role=insertion >> nth=2').click();
    await page.locator('role=button[name="DEVAM ET"]').click();
    await page.locator('text=Lütfen bilgileri eksiksiz giriniz.').elementHandle();

  });

  test('Kongre üyeliği hatalı TC numarası girişi', async ({ page }) => {
    await page.goto('/');
    await page.pause(); 
   // await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="KULÜP"]').click();
    await page.locator('role=link[name="Online Üyelik"]').click();
    await page.locator('div:nth-child(3) > .item >> nth=0').click();
    await page.locator('role=textbox[name="Ad"]').type('test');
    await page.locator('role=textbox[name="Soyad"]').type('test');
    await page.locator('internal:label=E-Posta').type('test@gmail.com');
    await page.locator('internal:attr=[placeholder="(5XX) XXX-XXXX"i]').type('5338424105');
    await page.locator('internal:label=T.C Kimlik Numarası').type('1');
    await page.locator('role=insertion >> nth=0').click();
    await page.locator('internal:label=Doğum Tarihi ( Gün / Ay / Yıl )').type('11.05.2000');
    await page.locator('internal:label=Doğum Yeri').type('İstanbul');
    await page.locator('span[role="textbox"]:has-text("Medeni Hali")').click();
    await page.locator('role=treeitem[name="Bekar"]').click();
    await page.locator('span[role="textbox"]:has-text("Kan Grubu")').click();
    await page.locator('role=treeitem[name="Arh+"]').click();
    await page.locator('span[role="textbox"]:has-text("Öğrenim Durumu")').click();
    await page.locator('role=treeitem[name="Lisans"]').click();
    await page.locator('internal:label=Anne Adı').type('test');
    await page.locator('internal:label=Baba Adı').type('test');
    await page.locator('span[role="textbox"]:has-text("Çalışma şekli seçiniz")').click();
    await page.locator('role=treeitem[name="Özel Sektör Ücretli"]').click();
    await page.locator('role=combobox[name="Sektör seçiniz"] >> span >> nth=2').click();
    await page.locator('role=treeitem[name="Araç/Filo Kiralama"]').click();
    await page.locator('span[role="textbox"]:has-text("Meslek/Ünvan seçiniz")').click();
    await page.locator('role=treeitem[name="Akademisyen"]').click();
    await page.locator('span[role="textbox"]:has-text("Branş seçiniz")').click();
    await page.locator('text=Şifre - Şifreniz en az 6 karakter uzunluğunda olmalıdır.').type('112102Cd');
    await page.locator('internal:label=Şifre Tekrar').type('112102Cd');
    await page.locator('role=insertion >> nth=2').click();
    await page.locator('role=button[name="DEVAM ET"]').click();
    await page.locator('text=Lütfen bilgileri eksiksiz giriniz.').elementHandle();

  });

  test('Kongre üyeliği hatalı Doğum Tarihi girişi', async ({ page }) => {
    await page.goto('/');
    await page.pause(); 
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="KULÜP"]').click();
    await page.locator('role=link[name="Online Üyelik"]').click();
    await page.locator('div:nth-child(3) > .item >> nth=0').click();
    await page.locator('role=textbox[name="Ad"]').type('test');
    await page.locator('role=textbox[name="Soyad"]').type('test');
    await page.locator('internal:label=E-Posta').type('test@gmail.com');
    await page.locator('internal:attr=[placeholder="(5XX) XXX-XXXX"i]').type('5338424105');
    await page.locator('internal:label=T.C Kimlik Numarası').type('11184209578');
    await page.locator('role=insertion >> nth=0').click();
    await page.locator('internal:label=Doğum Tarihi ( Gün / Ay / Yıl )').type('55.55.5555');
    await page.locator('internal:label=Doğum Yeri').type('İstanbul');
    await page.locator('span[role="textbox"]:has-text("Medeni Hali")').click();
    await page.locator('role=treeitem[name="Bekar"]').click();
    await page.locator('span[role="textbox"]:has-text("Kan Grubu")').click();
    await page.locator('role=treeitem[name="Arh+"]').click();
    await page.locator('span[role="textbox"]:has-text("Öğrenim Durumu")').click();
    await page.locator('role=treeitem[name="Lisans"]').click();
    await page.locator('internal:label=Anne Adı').type('test');
    await page.locator('internal:label=Baba Adı').type('test');
    await page.locator('span[role="textbox"]:has-text("Çalışma şekli seçiniz")').click();
    await page.locator('role=treeitem[name="Özel Sektör Ücretli"]').click();
    await page.locator('role=combobox[name="Sektör seçiniz"] >> span >> nth=2').click();
    await page.locator('role=treeitem[name="Araç/Filo Kiralama"]').click();
    await page.locator('span[role="textbox"]:has-text("Meslek/Ünvan seçiniz")').click();
    await page.locator('role=treeitem[name="Akademisyen"]').click();
    await page.locator('span[role="textbox"]:has-text("Branş seçiniz")').click();
    await page.locator('text=Şifre - Şifreniz en az 6 karakter uzunluğunda olmalıdır.').type('112102Cd');
    await page.locator('internal:label=Şifre Tekrar').type('112102Cd');
    await page.locator('role=insertion >> nth=2').click();
    await page.locator('text=18 yaşından küçükler online üyelik işlemini gerçekleştiremez.').elementHandle();
    await page.locator('role=button[name="DEVAM ET"]').click();
    await page.locator('text=Lütfen bilgileri eksiksiz giriniz.').elementHandle();

  });

  test('Kongre üyeliği hatalı Şifre girişi', async ({ page }) => {
    await page.goto('/');
    await page.pause(); 
   // await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="KULÜP"]').click();
    await page.locator('role=link[name="Online Üyelik"]').click();
    await page.locator('div:nth-child(3) > .item >> nth=0').click();
    await page.locator('role=textbox[name="Ad"]').type('test');
    await page.locator('role=textbox[name="Soyad"]').type('test');
    await page.locator('internal:label=E-Posta').type('test5@gmail.com');
    await page.locator('internal:attr=[placeholder="(5XX) XXX-XXXX"i]').type('5338424105');
    await page.locator('internal:label=T.C Kimlik Numarası').type('11184209578');
    await page.locator('role=insertion >> nth=0').click();
    await page.locator('internal:label=Doğum Tarihi ( Gün / Ay / Yıl )').type('11.05.2000');
    await page.locator('internal:label=Doğum Yeri').type('İstanbul');
    await page.locator('span[role="textbox"]:has-text("Medeni Hali")').click();
    await page.locator('role=treeitem[name="Bekar"]').click();
    await page.locator('span[role="textbox"]:has-text("Kan Grubu")').click();
    await page.locator('role=treeitem[name="Arh+"]').click();
    await page.locator('span[role="textbox"]:has-text("Öğrenim Durumu")').click();
    await page.locator('role=treeitem[name="Lisans"]').click();
    await page.locator('internal:label=Anne Adı').type('test');
    await page.locator('internal:label=Baba Adı').type('test');
    await page.locator('span[role="textbox"]:has-text("Çalışma şekli seçiniz")').click();
    await page.locator('role=treeitem[name="Özel Sektör Ücretli"]').click();
    await page.locator('role=combobox[name="Sektör seçiniz"] >> span >> nth=2').click();
    await page.locator('role=treeitem[name="Araç/Filo Kiralama"]').click();
    await page.locator('span[role="textbox"]:has-text("Meslek/Ünvan seçiniz")').click();
    await page.locator('role=treeitem[name="Akademisyen"]').click();
    await page.locator('span[role="textbox"]:has-text("Branş seçiniz")').click();
    await page.locator('text=Şifre - Şifreniz en az 6 karakter uzunluğunda olmalıdır.').type('11210');
    await page.locator('internal:label=Şifre Tekrar').type('11210');
    await page.locator('role=insertion >> nth=2').click();
    await page.locator('role=button[name="DEVAM ET"]').click();
    await page.locator('text=Şifreniz en az 6 karakter olmalıdır.').elementHandle();

  });

  test('Kongre üyeliği Şifre uyuşmazlığı girişi', async ({ page }) => {
    await page.goto('/');
    await page.pause(); 
   // await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="KULÜP"]').click();
    await page.locator('role=link[name="Online Üyelik"]').click();
    await page.locator('div:nth-child(3) > .item >> nth=0').click();
    await page.locator('role=textbox[name="Ad"]').type('test');
    await page.locator('role=textbox[name="Soyad"]').type('test');
    await page.locator('internal:label=E-Posta').type('test5@gmail.com');
    await page.locator('internal:attr=[placeholder="(5XX) XXX-XXXX"i]').type('5338424105');
    await page.locator('internal:label=T.C Kimlik Numarası').type('11184209578');
    await page.locator('role=insertion >> nth=0').click();
    await page.locator('internal:label=Doğum Tarihi ( Gün / Ay / Yıl )').type('11.05.2000');
    await page.locator('internal:label=Doğum Yeri').type('İstanbul');
    await page.locator('span[role="textbox"]:has-text("Medeni Hali")').click();
    await page.locator('role=treeitem[name="Bekar"]').click();
    await page.locator('span[role="textbox"]:has-text("Kan Grubu")').click();
    await page.locator('role=treeitem[name="Arh+"]').click();
    await page.locator('span[role="textbox"]:has-text("Öğrenim Durumu")').click();
    await page.locator('role=treeitem[name="Lisans"]').click();
    await page.locator('internal:label=Anne Adı').type('test');
    await page.locator('internal:label=Baba Adı').type('test');
    await page.locator('span[role="textbox"]:has-text("Çalışma şekli seçiniz")').click();
    await page.locator('role=treeitem[name="Özel Sektör Ücretli"]').click();
    await page.locator('role=combobox[name="Sektör seçiniz"] >> span >> nth=2').click();
    await page.locator('role=treeitem[name="Araç/Filo Kiralama"]').click();
    await page.locator('span[role="textbox"]:has-text("Meslek/Ünvan seçiniz")').click();
    await page.locator('role=treeitem[name="Akademisyen"]').click();
    await page.locator('span[role="textbox"]:has-text("Branş seçiniz")').click();
    await page.locator('text=Şifre - Şifreniz en az 6 karakter uzunluğunda olmalıdır.').type('112102C');
    await page.locator('internal:label=Şifre Tekrar').type('112102');
    await page.locator('role=insertion >> nth=2').click();
    await page.locator('role=button[name="DEVAM ET"]').click();
    await page.locator('text=Lütfen bilgileri eksiksiz giriniz.').elementHandle();

  });

  test.skip('Kongre üyeliği Boş alan bırakma girişi', async ({ page }) => {
    await page.goto('/');
    await page.pause(); 
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="KULÜP"]').click();
    await page.locator('role=link[name="Online Üyelik"]').click();
    await page.locator('div:nth-child(3) > .item >> nth=0').click();
    await page.locator('role=button[name="DEVAM ET"]').click();
    await page.locator('text=Lütfen bilgileri eksiksiz giriniz.').elementHandle();

  });

  test('Kongre üyeliği daha önce alınmış bir eposta girişi', async ({ page }) => {
    await page.goto('/');
    await page.pause(); 
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="KULÜP"]').click();
    await page.locator('role=link[name="Online Üyelik"]').click();
    await page.locator('div:nth-child(3) > .item >> nth=0').click();
    await page.locator('role=textbox[name="Ad"]').type('test');
    await page.locator('role=textbox[name="Soyad"]').type('test');
    await page.locator('internal:label=E-Posta').type('test@gmail.com');
    await page.locator('internal:attr=[placeholder="(5XX) XXX-XXXX"i]').type('5338424105');
    await page.locator('internal:label=T.C Kimlik Numarası').type('11184209578');
    await page.locator('role=insertion >> nth=0').click();
    await page.locator('internal:label=Doğum Tarihi ( Gün / Ay / Yıl )').type('11.05.2000');
    await page.locator('internal:label=Doğum Yeri').type('İstanbul');
    await page.locator('span[role="textbox"]:has-text("Medeni Hali")').click();
    await page.locator('role=treeitem[name="Bekar"]').click();
    await page.locator('span[role="textbox"]:has-text("Kan Grubu")').click();
    await page.locator('role=treeitem[name="Arh+"]').click();
    await page.locator('span[role="textbox"]:has-text("Öğrenim Durumu")').click();
    await page.locator('role=treeitem[name="Lisans"]').click();
    await page.locator('internal:label=Anne Adı').type('test');
    await page.locator('internal:label=Baba Adı').type('test');
    await page.locator('span[role="textbox"]:has-text("Çalışma şekli seçiniz")').click();
    await page.locator('role=treeitem[name="Özel Sektör Ücretli"]').click();
    await page.locator('role=combobox[name="Sektör seçiniz"] >> span >> nth=2').click();
    await page.locator('role=treeitem[name="Araç/Filo Kiralama"]').click();
    await page.locator('span[role="textbox"]:has-text("Meslek/Ünvan seçiniz")').click();
    await page.locator('role=treeitem[name="Akademisyen"]').click();
    await page.locator('span[role="textbox"]:has-text("Branş seçiniz")').click();
    await page.locator('text=Şifre - Şifreniz en az 6 karakter uzunluğunda olmalıdır.').type('112102C');
    await page.locator('internal:label=Şifre Tekrar').type('112102C');
    await page.locator('role=insertion >> nth=2').click();
    await page.locator('role=button[name="DEVAM ET"]').click();
    await page.locator('text=test@gmail.com e-posta adresi ile daha önce kayıt olunmuş, lütfen giriş yapınız.').elementHandle();
    await page.pause();

  });

  