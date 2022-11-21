const { test, expect } = require('@playwright/test');

test('Haberler - Kulüp', async ({ page }) => {
    await page.goto('/');
    await page.pause();  
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Kulüp Futbol Basketbol Erkek Basketbol Kadın Voleybol Erkek Voleybol Kadın") >> role=link[name="Kulüp"]').click();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
    await page.pause(); 

  });

  test('Haberler - Futbol ', async ({ page }) => {
    await page.goto('/');
    await page.pause();
   // await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Kulüp Futbol Basketbol Erkek Basketbol Kadın Voleybol Erkek Voleybol Kadın") >> role=link[name="Futbol"]').click();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
     await page.pause(); 

  });

  test.skip('Haberler - Basketbol Erkek', async ({ page }) => {
    await page.goto('/');
    await page.pause();
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Kulüp Futbol Basketbol Erkek Basketbol Kadın Voleybol Erkek Voleybol Kadın") >> role=link[name="Basketbol Erkek"]').click();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
    await page.pause(); 

  });

  test.only('Haberler - Basketbol Kadın', async ({ page }) => {
    await page.goto('/');
    await page.pause();
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Kulüp Futbol Basketbol Erkek Basketbol Kadın Voleybol Erkek Voleybol Kadın") >> role=link[name="Basketbol Kadın"]').click();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
    await page.pause(); 

  });

  test.only('Haberler - Voleybol erkek', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Kulüp Futbol Basketbol Erkek Basketbol Kadın Voleybol Erkek Voleybol Kadın") >> role=link[name="Voleybol Erkek"]').click();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
    await page.pause(); 

  });

  test('Haberler - Voleybol kadın', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Kulüp Futbol Basketbol Erkek Basketbol Kadın Voleybol Erkek Voleybol Kadın") >> role=link[name="Voleybol Kadın"]').click();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
    await page.pause(); 

  });

  test('Kulüp - Fenerbahçe SK ', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Fenerbahçe SK"]').click();
    await page.locator('role=heading[name="Fenerbahçe SK"]').elementHandle();
    await page.locator('span:has-text("1907")').elementHandle();
    await page.pause(); 

  });
  test('Kulüp - Çocuk ve Gençlik Kulübü ', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=contentinfo >> li:has-text("Çocuk ve Gençlik Kulübü") >> nth=1').click();
    await page.locator('role=heading[name="Siz de Fenerbahçe Çocuk ve Gençlik Kulübü ailesine katılın!"]').elementHandle();
    await page.locator('role=heading[name="AVANTAJLAR"]').elementHandle();
    await page.locator('role=heading[name="DUYURULAR"]').elementHandle();
    await page.pause(); 

  });

  test('Kulüp - Tarihçe  ', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Tarihçe"]').click();
    await page.locator('role=heading[name="TARİHÇE"]').elementHandle();
    await page.locator('text=1823 >> nth=1').elementHandle();
    await page.locator('span:has-text("1899") >> nth=3').elementHandle();
    await page.pause(); 

  });

  test('Kulüp - Müze ', async ({ page }) => {
    await page.goto('/');
    await page.pause();
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Müze"]').click();
    await page.locator('role=heading[name="HAKKINDA"]').elementHandle();
    await page.locator('role=heading[name="MÜZENİN YERİ VE BÖLÜMLERİ"]').elementHandle();
    await page.locator('role=heading[name="İLETİŞİM"]').elementHandle();
    await page.pause(); 

  });

  test('Kulüp - Yönetim Kurulu ', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Yönetim Kurulu"]').click();
    await page.locator('role=heading[name="YÖNETİM KURULU"]').elementHandle();
    await page.pause(); 

  });

  test('Kulüp - Atatürk ve Fenerbahçe ', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Atatürk ve Fenerbahçe"]').click();
    await page.locator('text=ATATÜRK’ÜN FENERBAHÇELİLİĞİ:').elementHandle();
    await page.pause(); 

  });

  test('Branşlar- Futbol', async ({ page }) => {
   await page.goto('/');
   //await page.locator('role=button[name="Close"]').click();
   await page.locator('ul:has-text("Futbol Basketbol Erkek Basketbol Kadın Basketbol Tekerlekli Sandalye Voleybol Er") >> role=link[name="Futbol"]').click();
   await page.locator('role=heading[name="FUTBOL A TAKIMI"]').elementHandle();
   await page.locator('role=heading[name="HABERLER"]').elementHandle();
   await page.pause(); 

  });
 
  
  test('Branşlar- Basketbol Erkek', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Futbol Basketbol Erkek Basketbol Kadın Basketbol Tekerlekli Sandalye Voleybol Er") >> role=link[name="Basketbol Erkek"]').click();
    await page.locator('role=heading[name="BASKETBOL ERKEK"]').elementHandle();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
    await page.pause(); 
 
   });

   test('Branşlar- Basketbol Kadın', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Futbol Basketbol Erkek Basketbol Kadın Basketbol Tekerlekli Sandalye Voleybol Er") >> role=link[name="Basketbol Kadın"]').click();
    await page.locator('role=heading[name="BASKETBOL KADIN"]').elementHandle();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
    await page.pause(); 
 
   });
   
  // test.only('Branşlar- Basketbol Tekerlekli Sandalye', async ({ page }) => {
  //  await page.goto('/');
  //  await page.locator('role=link[name="Basketbol Tekerlekli Sandalye"]').click();
  //  await page.locator('role=heading[name="BASKETBOL KADIN"]').elementHandle();
  //  await page.locator('role=heading[name="HABERLER"]').elementHandle();
  //  await page.pause(); 
 
  // });
  test('Branşlar- Voleybol erkek', async ({ page }) => {
    await page.goto('/');
   // await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Futbol Basketbol Erkek Basketbol Kadın Basketbol Tekerlekli Sandalye Voleybol Er") >> role=link[name="Voleybol Erkek"]').click();
    await page.locator('role=heading[name="VOLEYBOL ERKEK"]').elementHandle();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
    await page.pause(); 
 
   });

   test('Branşlar- Voleybol kadın', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Futbol Basketbol Erkek Basketbol Kadın Basketbol Tekerlekli Sandalye Voleybol Er") >> role=link[name="Voleybol Kadın"]').click();
    await page.locator('role=heading[name="VOLEYBOL KADIN"]').elementHandle();
    await page.locator('role=heading[name="HABERLER"]').elementHandle();
    await page.pause(); 
 
   });

   test('Katılımcı Fenerbahçe - Taraftarın Sesi', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Taraftarın Sesi"]').click();
    await page.locator('role=heading[name="Güçlü bir kulüp, aydınlık yarınlar için “Katılımcı Fenerbahçe”"]').elementHandle();
    await page.locator('role=heading[name="KULÜBE MESAJ GÖNDER"]').elementHandle();
    await page.pause(); 
 
   });

   test('Katılımcı Fenerbahçe - Özel İndirimler', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Özel İndirimler"]').click();
    await page.locator('role=heading[name="İNDİRİMLER"]').elementHandle();
    await page.pause(); 
 
   });
   
   test('Taraftar - FB kart', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="FB Kart"]').click();
    await page.locator('text=TARAFTAR KARTLI OL >> nth=1').elementHandle();
    await page.locator('role=button[name="GİRİŞ YAP arrow"]').elementHandle();
    await page.pause(); 
 
   });

   test('Taraftar - Futbol ağırlama paketi', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Futbol Ağırlama Paketleri"]').click();
    await page.locator('role=heading[name="Taraftarlarımıza, yepyeni bir deneyim sunuyoruz."]').elementHandle();
    await page.locator('p:has-text("EXECUTIVE BOX (1 Kişiliktir)")').elementHandle();
    await page.pause(); 
 
   });
   
   test('Taraftar - HeForShe ', async ({ page }) => {
    await page.goto('/');
   // await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="HeForShe"]').click();
    await page.locator('#p_lt_WebPartZone8_zoneContent_pagePlaceHolder_p_lt_WebPartZone1_Section1_GatewayBanner_GatewayBanner_zone_EditableImageLogo1_ucEditableImage_imgImage').elementHandle();
    await page.pause(); 
 
   });

   //test.only('Taraftar - Duvar Kağıdı ', async ({ page }) => {
   // await page.goto('/');
   // await page.locator('role=button[name="Close"]').click();
   // await page.locator('role=link[name="Duvar Kağıtları"]').click();
   // await page.locator('#p_lt_WebPartZone8_zoneContent_pagePlaceHolder_p_lt_WebPartZone1_Section1_GatewayBanner_GatewayBanner_zone_EditableImageLogo1_ucEditableImage_imgImage').elementHandle();
   // await page.pause(); 
 
   //});
   test('Marklar -  FB TV', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('ul:has-text("Fenerbahçe Üniversitesi FB TV Fenernet Fenercell Fenerbahçe Spor Okulları Fenerb") >> role=link[name="FB TV"]').click();
    await page.locator('role=heading[name="FENERBAHÇE TV"]').elementHandle();
    await page.pause(); 
 
   });

   

   test('Taraftar - Fenernet ', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Fenernet"]').click();
    await page.locator('role=link[name="FenerNET bir TTNET A.Ş. hizmetidir."]').elementHandle();
    await page.pause(); 
 
   });

   test('Taraftar - Fenercell ', async ({ page }) => {
    await page.goto('/');
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Fenercell"]').click();
    await page.locator('header:has-text("BİREYSEL KURUMSAL ONLINE İŞLEMLER E-MAĞAZA BİREYSEL KURUMSAL TARİFELER & PAKETLE") >> role=link[name="Fenercell"]').elementHandle();
    await page.pause(); 
 
   });
   test('Taraftar - Fenerbahçe Spor Okulları ', async ({ page }) => {
    await page.goto('/');
    await page.pause();
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Fenerbahçe Spor Okulları"]').click();
    await page.locator('.logo').elementHandle();
    await page.pause(); 
 
   });

   test('Taraftar - Fenerbahçe Koleji', async ({ page }) => {
    await page.goto('/');
    await page.pause();
    //await page.locator('role=button[name="Close"]').click();
    await page.locator('role=link[name="Fenerbahçe Koleji"]').click();
    await page.locator('role=heading[name="HABERLER + Tüm Haberler"]').elementHandle();
    await page.pause(); 
 
   });