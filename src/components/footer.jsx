import React from "react";
import "../styles/footer.css";
import ArticleFooter from "./footerArticle";
class Footer extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: "Sobre Nosotros",
        link: ["¿Quienes somos?", "Nuestra historia", "Nuestra información"],
      },
      {
        id: 2,
        title: "Categorias destacadas",
        link: [
          "Profesionales de la salud",
          "Protección e higiene",
          "Control y prevención",
          "Movilidad",
          "Independiencia y cuidado en el hogar",
          "Terapia respiratoria",
          "Confort",
        ],
      },
      {
        id: 3,
        title: "Servicio al cliente",
        link: [
          "Politica de entregas",
          "Politica de devoluciones",
          "Politica de garantias",
          "Politica de cancelación",
          "Whatsapp 123 123 3434",
          "PBX 01 8000 123 345",
          "e-Mail: info@impormedical.com",
        ],
      },
    ],
  };

  render() {
    return (
      <footer className="container-footer">
        <ArticleFooter articles={this.state.data} />
      </footer>
    );
  }
}
export default Footer;
