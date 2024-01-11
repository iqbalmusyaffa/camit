import {
  Heading,
  Image,
  Text,
  Input,
  HStack,
  View,
  VStack,
} from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";

const Home = () => {
  const navigation = useNavigation();

  const navigateToJurusan = (JurusanCard) => {
    // You can navigate to the "Jurusan" screen here with the selected jurusanName
    navigation.navigate("Jurusan", { jurusan: JurusanCard });
    const handleButtonPress = () => {
      // Menggunakan 'Tabs' sebagai nama layar yang benar
      navigation.navigate("Tabs");
    };
  };
  return (
    <>
      <Header title={"Izumi"} />
      <ScrollView backgroundColor={"white"} width={"100%"} height={"full"}>
        <View mx={"7"}>
          <Box mb={"6"} mt={"6"}>
            <VStack>
              <Heading fontSize={"26"} color={"black"}>
                Ayo Temukan Jurusan
              </Heading>
              <Heading fontSize={"26"} color={"black"}>
                Impianmu!
              </Heading>
            </VStack>
          </Box>
          <Box mb={"6"}>
            <Input
              mx="auto"
              placeholder="Search"
              borderRadius={"20"}
              mr="50%"
              w="70%"
              padding="3"
            />
          </Box>

          <Image source={require("../assets/coverhome.png")} borderRadius={"20"}/>

          <HStack>
            <Text fontSize={20} mt={"4"} mb={"2"}>
              Jurusan{" "}
            </Text>
            <Text bold={true} fontSize={20} mt={"4"} mb={"2"}>
              IT
            </Text>
          </HStack>
        
        </View>

        <TouchableOpacity onPress={() => navigateToJurusan("Sistem Informasi")}></TouchableOpacity>
        <View mx={"3"}>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 20 }}>
            <TouchableOpacity onPress={navigateToJurusan}>
              <Image
                source={require("../assets/image1.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Sistem Informasi
              </Text>
              </TouchableOpacity>
            </View>
            
            
            
            <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={navigateToJurusan}>
              <Image
                source={require("../assets/rekayasa.png")}
                height={90}
                width={150}
              
              />
              <VStack space={0} alignItems="flex-start" width={150}>
                <Text bold={true} textAlign={"justify"}>
                  Rekayasa Perangkat
                </Text>
                <Text bold={true} textAlign={"justify"}>
                  Lunak
                </Text>
              </VStack>
              </TouchableOpacity>
            </View>
            
          </View>
          
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 20 }}>
            <TouchableOpacity onPress={navigateToJurusan}>
              <Image
                source={require("../assets/teknik.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Teknik Informatika
              </Text>
              </TouchableOpacity>
            </View>
            
            <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={navigateToJurusan}>
              <Image
                source={require("../assets/teknologi.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Teknologi Informasi
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            
            <View style={{ marginRight: 20 }}>
            <TouchableOpacity onPress={navigateToJurusan}>
              <Image
                source={require("../assets/teknik.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Teknik Industri
              </Text>
              </TouchableOpacity>
            </View>
            
            <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={navigateToJurusan}>
              <Image
                source={require("../assets/tk.png")}
                height={90}
                width={150}
              />
              <Text bold={true} paddingBottom={"2"} textAlign={"justiify"}>
                Teknik Komputer
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      
      
    </>
  );
};

export default Home;
