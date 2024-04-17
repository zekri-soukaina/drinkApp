import { Flex } from "@chakra-ui/react";
import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ drinks, clickFn }) => {
  return (
    <Flex
      gap={16}
      w={{ base: "full", sm: "75%" }}
      flexWrap="wrap"
      flexDir={{ base: "column", sm: "row" }}
      justify={"center"}
      alignItems={"center"}>
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
      ))}
    </Flex>
  );
};
