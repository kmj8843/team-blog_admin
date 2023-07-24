import { Helmet } from "react-helmet-async";

const Head = () => {
  return (
    <Helmet title="Blog Admin">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

export default Head;
