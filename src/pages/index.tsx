import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {posts} from '@site/src/data/posts';
import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  const location = useLocation();
  const isEnglish = !location.pathname.startsWith('/tr');
  const copy = isEnglish
    ? {
        eyebrow: 'Notes from the build',
        title: 'Thinking in public, one commit at a time.',
        intro:
          'Developer insights, project retrospectives, and the practical details that usually stay between the lines.',
        latest: 'Latest writing',
        all: 'View all writing',
        read: 'Read article',
        min: 'min read',
        page: 'Page',
        next: 'Next page',
      }
    : {
        eyebrow: 'Üretim notları',
        title: 'Her commit ile biraz daha iyi düşünmek.',
        intro:
          'Geliştirici notları, proje retrospektifleri ve genelde satır aralarında kalan pratik detaylar.',
        latest: 'Son yazılar',
        all: 'Tüm yazıları gör',
        read: 'Yazıyı oku',
        min: 'dk okuma',
        page: 'Sayfa',
        next: 'Sonraki sayfa',
      };
  const visiblePosts = posts.filter((post) => !post.locale || post.locale === (isEnglish ? 'en' : 'tr')).slice(0, 6);

  return (
    <Layout>
      <Head>
        <meta property="og:title" content={copy.title} />
        <meta property="og:description" content={copy.intro} />
      </Head>
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}><span />{copy.eyebrow}</p>
                <h1>{copy.title}</h1>
              </div>
              <div className={styles.heroAside}>
                <p>{copy.intro}</p>
                <Link className={styles.arrowLink} to={isEnglish ? '/blog' : '/tr/blog'}>
                  {copy.all} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <div className={styles.rule} />
            <div className={styles.signalRow}>
              <span>01 / 06</span>
              <span>{isEnglish ? 'Istanbul · UTC+3' : 'İstanbul · UTC+3'}</span>
              <span className={styles.signal}><i /> {isEnglish ? 'Currently building' : 'Şu an geliştiriyor'}</span>
            </div>
          </div>
        </section>
        <section className={styles.writing}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <h2>{copy.latest}</h2>
              <span>{String(visiblePosts.length).padStart(2, '0')} / 06</span>
            </div>
            <div className={styles.postGrid}>
              {visiblePosts.map((post, index) => (
                <article className={styles.post} key={post.slug}>
                  <div className={styles.postNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <div className={styles.postBody}>
                    <div className={styles.postMeta}>
                      <time dateTime={post.date}>{post.dateLabel}</time>
                      <span>·</span>
                      <span>{post.readingTime} {copy.min}</span>
                    </div>
                    <h3><Link to={post.path}>{post.title}</Link></h3>
                    <p>{post.description}</p>
                    <Link className={styles.readLink} to={post.path}>{copy.read} <span>→</span></Link>
                  </div>
                  <div className={styles.postTag}>{post.tag}</div>
                </article>
              ))}
            </div>
            <div className={styles.pagination}>
              <span>{copy.page} <strong>01</strong> / 02</span>
              <Link to={isEnglish ? '/blog/page/2' : '/tr/blog/page/2'}>{copy.next} <span>→</span></Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
