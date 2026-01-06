"use client";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { MyIconButton } from "@/ui/MyIconButton";
import { AddPlusCircleIcon } from "@/assets/icons/add-plus-circle-icon";
import { MySelect } from "@/ui/MySelect";
import { useQuery } from "@tanstack/react-query";
import TransportService from "@/modules/userPost/service/transportService";
import { transformIntoSelectCollection } from "@/modules/burgerMenu/lib/transformIntoSelectCollection";
import { SelectChangeDetails } from "../../../types/MySelectType";
import { selectTransportValueStore } from "@/modules/logbook/store/selectTransportValue";
import { useRouter } from "next/navigation";
import { UseAuthErrorModal } from "@/hooks/useAuthErrorModal";

export function MyLogbookHeader() {
  const { data } = useQuery({
    queryKey: ["fetch:get/transports"],
    queryFn: TransportService.getAllTransports,
    select: (data) => transformIntoSelectCollection(data?.data),
  });
  const onWriteClick = () => {
    router.push("/profile");
  };
  const { checkAuthHandler } = UseAuthErrorModal({ callback: onWriteClick });
  const router = useRouter();
  const { setTransportValue } = selectTransportValueStore();

  const onSelectTransportValueChange = (details: SelectChangeDetails) => {
    setTransportValue(details.value[0]);
  };

  return (
    <Grid
      overflowX={"hidden"}
      templateColumns={{ md: "25% 75%" }}
      templateRows={{ base: "30px auto", md: "none" }}
      gap={8}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <GridItem>
        <Heading p={4} size={{ base: "2xl", lg: "3xl" }} mt={{ sm: 4, md: 0 }}>
          Бортжурнал
        </Heading>
      </GridItem>
      <GridItem
        display="flex"
        gap={4}
        alignItems={"center"}
        pl={{ base: 4, md: 0 }}
      >
        <MySelect
          onChange={onSelectTransportValueChange}
          placeholder={"транспорт"}
          collection={data || []}
          label={"транспорт"}
        />
        <MyIconButton
          title={"Написать"}
          icon={<AddPlusCircleIcon />}
          onClick={checkAuthHandler}
          colorPalette={"orange"}
        />
      </GridItem>
    </Grid>
  );
}
