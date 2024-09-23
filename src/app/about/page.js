import  { getAllProductsDB }from "@/app/actions"

const About = async () => {

  const products = await getAllProductsDB();
  console.log(products);

  return (
    <div> Hola!</div>
  )
}

export default About