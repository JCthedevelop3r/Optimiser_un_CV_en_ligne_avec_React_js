import "./style.css";
import "./ServicesPage.css";
import Prestations from "./Prestations";
import ChangeBanner from "./ChangeBanner";

function Card({ children }) {
  return <section>{children}</section>;
}

export default function ServicesPage(props) {
  return (
    <main className="services-page">
      <section className="text-center d-flex flex-column align-items-center">
        <ChangeBanner />
        <h2 className="h2-sp text-uppercase fs-1">Mon offre de services</h2>
        <p className="text-intro">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <div className="blue-stroke-sp border border-top border-start-0 border-end-0 border-bottom-0 border-4 border-primary"></div>
      </section>
      <Card>
        <Prestations />
      </Card>
    </main>
  );
}
