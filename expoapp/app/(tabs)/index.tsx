import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from '@expo/vector-icons/Feather';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#FFB6C1" }}>
    <ScrollView>
      <View style={{ height: 150 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={{
            alignItems: "center",
            //justifyContent: "space-around",
            flexDirection: "row",

            //height: 150,
            //borderWidth: 1,
          }}
        >


          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              style={styles.imgContainer1}
              source={{
                uri: "https://res.cloudinary.com/hgchxeahe/image/upload/v1697012357/z3dopeliqbn1ritae9ty.jpg",
              }}
            />
          ))} 

        </ScrollView>
      </View>


      <View style={{ flexDirection: "row" , margin: 10}}>
        <Text style={{ fontWeight: 800 }}>Энэ сарын онцлох</Text>
        <AntDesign name="star" size={18} color="gold" />
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
        <View style={{ height: 10 }} />

      </View>


      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <ScrollView horizontal={true}>
        {Array.from({ length: 3 }).map((_, index) => (
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNjA2ZGVzaWduLXJlbWl4LWJnLTEzLWEuanBn.jpg",
              }}
            />
            <AntDesign name="heart" position="absolute" size={18} color="purple" style={{right: 15, top:5}} />
            <Text style={{ color: "gray", marginLeft: 10 }}>James</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Shidet muhlag </Text>

          </View>
        ))} 
        </ScrollView>

      </ScrollView>


      <View style={{height: 10}}> </View>


     <View style= {{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
          <View >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: 800 }}> Зөвхөн Mbook ээс </Text>
                <Feather name="headphones" size={18} color="purple" style={{marginLeft:5}}/>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: 10 }}>Аудио ном</Text>
                <View style={{ height: 10 }} />
              </View>
          </View>
          <View >
              <View style={{ flexDirection: "row", alignItems: "flex-end"}}>
                <Text style={{ fontWeight: 800 }}> Бүгд </Text>
                <AntDesign name="arrowright" size={18} color="purple" style={{marginLeft:5}} />
                
              </View>
          </View>
      </View>


      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
      <Text>abc</Text>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}></View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  a: ThirdRoute,
  b: ThirdRoute,
  c: ThirdRoute,
  d: ThirdRoute,
  e: ThirdRoute,
  f: ThirdRoute,
  g: ThirdRoute,
  h: ThirdRoute,
  i: ThirdRoute,
});

const routes = [
  { key: "first", title: "Танд зориулсан" },
  { key: "second", title: "Аудио ном" },
  { key: "third", title: "Цахим ном" },
  { key: "a", title: "Цахим ном" },
  { key: "b", title: "Цахим ном" },
  { key: "c", title: "Цахим ном" },
  { key: "d", title: "Цахим ном" },
  { key: "e", title: "Цахим ном" },
  { key: "f", title: "Цахим ном" },
  { key: "g", title: "Цахим ном" },
  { key: "h", title: "Цахим ном" },
  { key: "i", title: "Цахим ном" },
];

export default function index() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled={true} // Tab-ууд гүйлгэх боломжтой болно
            style={{ backgroundColor: "#FF007F" }}
          />
        )}
      />
      <Text>HELLO WORLD</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgContainer1: {
    height: 120,
    width: 200,
    marginRight: 10,
    marginLeft: 10,
  },
  imgContainer: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 10,
  },
});
