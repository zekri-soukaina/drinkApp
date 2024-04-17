import { Center, Image, Text, WrapItem } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <WrapItem>
      <Center gap={8} cursor={"pointer"} onClick={() => clickFn(drink)}>
        <Image
          src={drink.imgUrl}
          w={50}
          h={50}
          borderRadius={"xl"}
          alt={drink.alt}
        />
        <Text fontWeight={"450"}>{drink.name}</Text>
      </Center>
    </WrapItem>
  );
};

// import { Image, Text, WrapItem } from "@chakra-ui/react";
// import { Center } from "@chakra-ui/react";

// export const DrinkItem = ({ drink, clickFn }) => {
//   return (
//     <div>
//       <WrapItem>
//         <Center
//           // bg="blue.200"
//           // width={150}
//           // p={4}
//           // m={4}
//           gap={8}
//           //  h="100px"
//           // color="black"
//           onClick={() => clickFn(drink)}
//           cursor={"pointer"}>
//           <Image
//             src={drink.imgUrl}
//             width={100}
//             height={100}
//             borderRadius={"xl"}
//             alt={drink.alt}
//           />

//           <Text fontWeight={"450"}>{drink.name}</Text>
//         </Center>
//       </WrapItem>
//     </div>
//   );
// };
