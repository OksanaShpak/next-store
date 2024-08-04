import { Container, Title, TopBar, Filters, ProductCard, ProductsGroupList } from "@/components/shared";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title={"Pizza"} items={[
                {
                  id: 1,
                  name: "Margherita",
                  imageUrl: "/images/products/margherita.png",
                  items: [
                    {
                      price: 450,
                    }
                  ]
                },
                {
                  id: 2,
                  name: "Pepperoni",
                  imageUrl: "/images/products/pepperoni.png",
                  items: [
                    {
                      price: 500,
                    }
                  ]
                },
                {
                  id: 3,
                  name: "Hawaiian",
                  imageUrl: "/images/products/hawaiian.png",
                  items: [
                    {
                      price: 600,
                    }
                  ]
                }
              ]}
                categoryId={1}
              />
              <ProductsGroupList title={"Sushi"} items={[
                {
                  id: 4,
                  name: "Coca-Cola",
                  imageUrl: "/images/products/coca-cola.png",
                  items: [
                    {
                      price: 100,
                    }
                  ]
                },
                {
                  id: 5,
                  name: "Fanta",
                  imageUrl: "/images/products/fanta.png",
                  items: [
                    {
                      price: 100,
                    }
                  ]
                },
                {
                  id: 6,
                  name: "Sprite",
                  imageUrl: "/images/products/sprite.png",
                  items: [
                    {
                      price: 100,
                    }
                  ]
                }
              ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
