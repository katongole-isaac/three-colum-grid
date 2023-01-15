import { data } from "../data";
import Card from "./Card";

const CardList = () => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.alt} {...item} />
      ))}
    </>
  );
};

export default CardList;
