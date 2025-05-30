import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Yvonne Schmedemann Photography",
  description: "Impressum",
  category: "photography",
  authors: [
    { name: "Yvonne Schmedemann" },
    { name: "Paul Ungerer", url: "https://github.com/pung-one" },
  ],
  keywords: [
    "Yvonne Schmedemann",
    "Yvonne",
    "Schmedemann",
    "Hamburg",
    "Fotografie",
    "Photography",
    "Bilder",
    "Fotos",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Impressum | Yvonne Schmedemann Photography",
    url: "https://www.yvonneschmedemann.com/impressum",
    siteName: "Yvonne Schmedemann",
    type: "website",
    description: "Impressum",
  },
};

export default async function Page() {
  return (
    <p className={styles.textContainer}>
      IMPRINT
      <br />
      <br />
      Angaben gemäß § 5 TMG
      <br />
      <br />
      <i>
        Yvonne Schmedemann
        <br />
        Hoheluftchaussee 139
        <br />
        20253 Hamburg
        <br />
        <br />
        Telefon:{" "}
        <a
          className={styles.externalLink}
          target="_blank"
          href="tel:+491792304580"
        >
          +491792304580
        </a>
        <br />
        E-Mail:{" "}
        <a
          className={styles.externalLink}
          target="_blank"
          href="mailto:mail@yvonneschmedemann.com"
        >
          mail@yvonneschmedemann.com
        </a>
        <br />
      </i>
      Ust-IdNr. DE 26 976 617 4
      <br />
      <br />
      <br />
      <br />
      HAFTUNGSAUSSCHLUSS:
      <br />
      <br />
      HAFTUNG FÜR INHALTE
      <br />
      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
      Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
      keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
      für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
      verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
      nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
      überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
      Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
      Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
      unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
      der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
      von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
      entfernen.
      <br />
      <br />
      HAFTUNG FÜR LINKS
      <br />
      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
      Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
      Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
      auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
      Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
      Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
      einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverlet-
      zungen werden wir derartige Links umgehend entfernen.
      <br />
      <br />
      Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:
      <br />
      <br />
      FOTO/ BILDRECHTE:
      <br />
      Yvonne Schmedemann
      <br />
      (Anschrift wie oben)
      <br />
      <br />
      PROGRAMMIERUNG:
      <br />
      <a
        className={styles.externalLink}
        target="_blank"
        href="https://github.com/pung-one"
      >
        Paul Ungerer
      </a>
      <br />
      <br />
      LOGO + DESIGN:
      <br />
      Juliane van Treeck
      <br />
      <br />
      URHEBERRECHT:
      <br />
      Urheberrechtsschutz: Alle Rechte vorbehalten. Inhalt und Aufbau dieser
      Webseiten, vor allen Dingen Texte, Bilder und Grafiken unterliegen dem
      Schutz des Urheberrechts und anderer Schutzgesetze. Der Inhalt dieser
      Websites darf nicht zu kommerziellen Zwecken kopiert, verbreitet,
      verändert oder Dritten zugänglich gemacht werden. Einige Inhalte der
      Website können außerdem dem Copyright und den Schutzrechten Dritter
      unterliegen. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
      erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
      werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
      eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
      entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
      wir derartige Inhalte umgehend entfernen.
      <br />
      <br />
      <br />© 2025 - all pictures: YVONNE SCHMEDEMANN
    </p>
  );
}
