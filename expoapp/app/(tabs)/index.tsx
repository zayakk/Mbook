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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';




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
              key={index} // Key нэмэх
              style={styles.imgContainer1}
              source={{
                uri: "https://res.cloudinary.com/hgchxeahe/image/upload/v1697012357/z3dopeliqbn1ritae9ty.jpg",
              }}
              onError={() => console.log("Image load failed!")} // source биш, Image дээр бичих
            />
          ))}


        </ScrollView>
      </View>


      <View style={{ flexDirection: "row" ,marginLeft: 5, marginTop: 5}}>
        <Text style={{ fontWeight: "bold" }}> Энэ сарын онцлох </Text>
        <AntDesign name="star" size={18} color="gold" style={{marginLeft: 5}}/>
      </View>
      <View style={{marginLeft : 5}}>
        <Text style={{ fontSize: 10 }}> Аудио ном </Text>
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
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false} 
        >
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index} style={{ position: "relative" }}>
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNjA2ZGVzaWduLXJlbWl4LWJnLTEzLWEuanBn.jpg",
            }}
            onError={() => console.log("Image load failed!")}
          />
          
          {/* Зүрхэн icon (таалагдсан эсэх) */}
          <AntDesign  
            name="heart"  
            size={18} 
            color="purple" 
            style={{ 
              position: "absolute",
              right: 15,   // Зүүнээс биш, баруун талд байрлуулна
              top: 2,     // Дээр байрлуулна
            }}  
          />


          <Text style={{ color: "#040720", marginLeft: 10 , fontSize: 8}}>Саяака  Мурата</Text>        
        
          <Text 
            numberOfLines={2} 
            ellipsizeMode="tail" 
            style={[
              styles.textStyle,
              {  
                color: "#040720", 
                marginLeft: 5, 
                fontSize: 10,  
                width: 100, 
                flexShrink: 1 
              }
            ]}
          >  Нэрийн дэлгүүрйин эмэгтэй 
          </Text>
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
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index} style={{ width: 120 }}>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://i.pinimg.com/736x/6e/37/50/6e3750979cb5eba10a0d1a09095472c1.jpg",
              }}
              onError={() => console.log("Image load failed!")}
            />
            <MaterialCommunityIcons 
              name="headphones-box" 
              size={18} 
              color="#00008B" 
              style={{
                position: "absolute",
                right: 13,
                top: 2,
              }} 
            />
            <Text style={{ color: "#040720", marginLeft: 10 , fontSize: 8 }}>Ц. Оюунгэрэл</Text>
            <Text 
              numberOfLines={2} 
              ellipsizeMode="tail" 
              style={{ fontSize: 10, marginLeft: 10, flexShrink: 1 }}>
              Жаран цагаан хонь / Бүтэн /
            </Text>
          </View>
        ))}
      </ScrollView>






      <View style= {{flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginLeft: 5}}>
          <View >
              <View style={{ flexDirection: "row" , width: "90%"}}>
                <Text 
                    numberOfLines={2} 
                    ellipsizeMode="tail" 
                    style={{ fontWeight: 800  }}> Анх удаа ном сонсох гэж байна уу? </Text>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: 10 }}>  Унших завгүй бол СОНСООД л үз </Text>
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
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index} style={{ width: 120 }}>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://christmasstories.org/wp-content/uploads/2024/12/image-30.png?w=816",
              }}
              onError={() => console.log("Image load failed!")}
            />
            <MaterialCommunityIcons 
              name="headphones-box" 
              size={18} 
              color="#00008B" 
              style={{
                position: "absolute",
                right: 13,
                top: 2,
              }} 
            />
            <Text style={{ color: "#040720", marginLeft: 10 , fontSize: 8 }}>Доктор Сьюз</Text>
            <Text 
              numberOfLines={2} 
              ellipsizeMode="tail" 
              style={{ fontSize: 10, marginLeft: 10, flexShrink: 1 }}>
              Гринч зул сарыг хулгайлсан нь
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>







    <View style= {{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
          <View >
              <View style={{ flexDirection: "row" }}>
                <Text 
                    style={{ fontWeight: 800  }}> Багц номнууд </Text>
                <MaterialCommunityIcons name="bookshelf" size={20} color="black" />
              </View>
          </View>
          <View >
              <View style={{ flexDirection: "row", alignItems: "flex-end"}}>
                <Text style={{ fontWeight: 800 }}> Бүгд </Text>
                <AntDesign name="arrowright" size={18} color="purple" style={{marginLeft:5}} />
                
              </View>
          </View>
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index} style={{ width: 120 }}>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://mrp.market.mn/products/picture/000/011/207/original.webp?1667533715",
              }}
              onError={() => console.log("Image load failed!")}
            />
            
            <FontAwesome 
              name="book" 
              size={14} 
              color="#00008B" 
              style={{
                position: "absolute",
                right: 13,
                top: 2,
              }} 
            />
            <Text 
              numberOfLines={2} 
              ellipsizeMode="tail" 
              style={{ fontSize: 10, marginLeft: 10, flexShrink: 1 }}>
              Тархи угаах урлаг багц
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>


<Text style={{margin: 20}}>  </Text>

        

        <View style={{ flex: 1 }}>
        <Image 
          source={{ uri: "https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC" }} 
          style={styles.backgroundImage} 
        />
        </View>
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
      {/* <Text>HELLO WORLD</Text> */}
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
  textStyle: {

  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: -1, // Арын зураг доор үлдэнэ
  },
});
