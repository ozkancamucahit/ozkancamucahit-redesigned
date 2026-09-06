export type Post = {
  slug: string; path: string; title: string; description: string; date: string; dateLabel: string;
  readingTime: number; tag: string; locale?: 'tr' | 'en';
};

export const posts: Post[] = [
  {slug: 'sistem-kurmak', path: '/tr/blog/sistem-kurmak', title: 'Sistem kurmak, özellik eklemekten daha zor', description: 'Bir projeyi büyütürken kararların neden kod kadar önemli olduğunu yeniden öğrendim.', date: '2025-02-12', dateLabel: '12 ŞUB 2025', readingTime: 7, tag: 'Düşünceler', locale: 'tr'},
  {slug: 'sistem-kurmak-en', path: '/blog/sistem-kurmak', title: 'Building a system is harder than adding a feature', description: 'Why the decisions around a growing project matter as much as the code.', date: '2025-02-12', dateLabel: '12 FEB 2025', readingTime: 7, tag: 'Thinking', locale: 'en'},
  {slug: 'testing-as-design', path: '/blog/testing-as-design', title: 'Testing is a design tool', description: 'What happens when tests stop being a safety net and start shaping the interface?', date: '2025-01-28', dateLabel: '28 JAN 2025', readingTime: 8, tag: 'Craft', locale: 'en'},
  {slug: 'testing-as-design-tr', path: '/tr/blog/testing-as-design', title: 'Test yazmak bir tasarım aracıdır', description: 'Testleri yalnızca güvenlik ağı değil, arayüzün şeklini belirleyen bir araç olarak düşünmek.', date: '2025-01-28', dateLabel: '28 OCA 2025', readingTime: 8, tag: 'Zanaat', locale: 'tr'},
  {slug: 'iyi-api-notlari', path: '/tr/blog/iyi-api-notlari', title: 'İyi bir API için tuttuğum küçük notlar', description: 'İsimlendirme, hata mesajları ve dokümantasyon arasında beklenmedik bir ortaklık var.', date: '2025-01-15', dateLabel: '15 OCA 2025', readingTime: 6, tag: 'Backend', locale: 'tr'},
  {slug: 'iyi-api-notlari-en', path: '/blog/iyi-api-notlari', title: 'Small notes on building a good API', description: 'Naming, error messages, and documentation share more than we think.', date: '2025-01-15', dateLabel: '15 JAN 2025', readingTime: 6, tag: 'Backend', locale: 'en'},
  {slug: 'shipping-small', path: '/blog/shipping-small', title: 'Shipping small, learning fast', description: 'A field note on making the smallest useful version feel complete.', date: '2024-12-19', dateLabel: '19 DEC 2024', readingTime: 5, tag: 'Projects', locale: 'en'},
  {slug: 'shipping-small-tr', path: '/tr/blog/shipping-small', title: 'Küçük gönder, hızlı öğren', description: 'En küçük faydalı sürümü bile tamamlanmış hissettirmek üzerine bir not.', date: '2024-12-19', dateLabel: '19 ARA 2024', readingTime: 5, tag: 'Projeler', locale: 'tr'},
  {slug: 'otomasyonun-sinirlar', path: '/tr/blog/otomasyonun-sinirlar', title: 'Otomasyonun sınırlarını kabul etmek', description: 'Her şeyi otomatikleştirmeye çalışmak yerine doğru yerde durmayı öğrenmek.', date: '2024-12-04', dateLabel: '04 ARA 2024', readingTime: 5, tag: 'Düşünceler', locale: 'tr'},
  {slug: 'otomasyonun-sinirlar-en', path: '/blog/otomasyonun-sinirlar', title: 'Accepting the limits of automation', description: 'Learning when to stop automating and leave room for better decisions.', date: '2024-12-04', dateLabel: '04 DEC 2024', readingTime: 5, tag: 'Thinking', locale: 'en'},
  {slug: 'reading-code', path: '/blog/reading-code', title: 'Reading code before writing it', description: 'The small rituals that make an unfamiliar codebase become legible.', date: '2024-11-21', dateLabel: '21 NOV 2024', readingTime: 6, tag: 'Practice', locale: 'en'},
  {slug: 'reading-code-tr', path: '/tr/blog/reading-code', title: 'Yazmadan önce kodu okumak', description: 'Yabancı bir kod tabanını anlaşılır hale getiren küçük ritüeller.', date: '2024-11-21', dateLabel: '21 KAS 2024', readingTime: 6, tag: 'Pratik', locale: 'tr'},
];
