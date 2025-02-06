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
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


const FirstRoute = () => (

  
  <View style={{ flex: 1, backgroundColor: "#FFB6C1" }}>
    <ScrollView       >
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


      <View>
        <View style={{ flexDirection: "row" ,marginLeft: 5, marginTop: 5}}>
          <Text style={{ fontWeight: "bold" }}> Энэ сарын онцлох </Text>
          <AntDesign name="star" size={18} color="gold" style={{marginLeft: 5}}/>
        </View>
        <View style={{marginLeft : 5}}>
          <Text style={{ fontSize: 10 }}> Аудио ном </Text>
          <View style={{ height: 10 }} />
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
            style={
              {  
                color: "#040720", 
                marginLeft: 5, 
                fontSize: 10,  
                width: 100, 
                flexShrink: 1 
              }
            }
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

        

<View style={{ }}>
  {/* Арын зураг - Тогтвортой үлдэнэ */}
  <Image
    source={{
      uri: "https://images.pexels.com/photos/3109850/pexels-photo-3109850.jpeg?cs=srgb&dl=pexels-anniroenkae-3109850.jpg&fm=jpg",
    }}
    style={{
      width: "100%",
      height: 300,
      position: "absolute",
      top: 0,
      left: 0,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    }}
  />

  <View style={{ marginTop: 10, padding: 15 }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Credit books</Text>
        <MaterialCommunityIcons name="star-shooting-outline" size={20} color="yellow" style={{ marginLeft: 5 }} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontWeight: "500", color: "#BE3144", fontSize: 20 }}>Бүгд</Text>
        <AntDesign name="arrowright" size={18} color="purple" style={{ marginLeft: 5 }} />
      </View>
    </View>

    <Text
      numberOfLines={2}
      ellipsizeMode="tail"
      style={{
        margin: 5,
        color: "white",
        fontSize: 14,
        lineHeight: 20,
        flexShrink: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      Subscription үйлчилгээг идэвхжүүлээд доорх номнуудаас 1-г сонгон сонсоорой
      <FontAwesome name="hourglass-start" size={14} color="pink" style={{ marginLeft: 10 }} />
    </Text>
  </View>

  {/* Дээр нь `ScrollView` ажиллана */}
  {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View style={{ flexDirection: "row", marginLeft: 5 }}>
    {Array.from({ length: 5 }).map((_, index) => (
      <View key={index} style={{ position: "relative" }}>
        <Image
          style={{
            width: 150,
            height: 120,
            borderRadius: 10,
            marginRight: 10,
            borderWidth: 2,
            borderColor: "#fff",
          }}
          source={{
            uri: "ccccccccccccccccc",
          }}
        />
        <AntDesign
          name="heart"
          size={18}
          color="purple"
          style={{ position: "absolute", top: 5, right: 40 }}
        />
        <Text style={{ color: "white", fontSize: 12, fontWeight: "bold", textAlign: "center" }}>
          Саяака Мурата
        </Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 12,
            marginTop: 5,
            flexWrap: "wrap",
            flexShrink: 1
          }}
        >
          Нэрийн дэлгүүрийн эмэгтэйа
        </Text>
      </View>
    ))}
  </View>
</ScrollView> */}

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index} style={{ width: 160  }}>
            <Image
              style={{
                width: 150,
                height: 120,
                borderRadius: 10,
                marginRight: 10,
                borderWidth: 2,
                borderColor: "#fff",}}
              source={{
                uri: "https://t4.ftcdn.net/jpg/08/11/83/31/360_F_811833149_6MO2TGZ02dt9amBMVcWSpN1hD7Il2b8C.jpg",
              }}
              onError={() => console.log("Image load failed!")}
            />
            <AntDesign
              name="heart" 
              size={18} 
              color="#00008B" 
              style={{
                position: "absolute",
                right: 15,
                top: 2,
              }} 
            />
            <Text style={{ color: "white", marginLeft: 10 , fontSize: 8 }}>Саяака Мурата</Text>
            <Text 
              numberOfLines={2} 
              ellipsizeMode="tail" 
              style={{ fontSize: 10, marginLeft: 10, flexShrink: 1 , color: "white"}}>
              Нэрийн дэлгүүрийн эмэгтэй
            </Text>
          </View>
        ))}
      </ScrollView>

</View>


<Text style={{margin: 5 }}>  </Text>


          <View style= {{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
          <View >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: 800 }}> Заавал сонсох 10 ном </Text>
                <Feather name="headphones" size={18} color="purple" style={{marginLeft:5}}/>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: 10 }}>Subsription/Credit эрхээрээ аваарай </Text>
                <View style={{ height: 10 }} />
              </View>
          </View>
      </View>
      
      <ScrollView 
        horizontal = {true}
        showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} style={{ width: 120 }}>
            <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?cs=srgb&dl=pexels-pixabay-36753.jpg&fm=jpg",
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
            <Text style={{ color: "#040720", marginLeft: 10 , fontSize: 8 }}>Антуан де Сент-Экзюпери</Text>
            <Text 
              numberOfLines={2} 
              ellipsizeMode="tail" 
              style={{ fontSize: 10, marginLeft: 10, flexShrink: 1 }}>
              Бяцхан хунтайж
            </Text>
          </View>
        ))}
      </ScrollView>


<Text style={{margin: 10}}>  </Text>


  <View style= {{flexDirection: "row", justifyContent: "space-between", margin: 5}}>
  <View >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}> Зохиолчид </Text>
        <SimpleLineIcons name="people" size={16} color="black" />
      </View>
  </View>
  <View >
      <View style={{ flexDirection: "row", alignItems: "flex-end"}}>
        <Text style={{ fontWeight: 800 }}> Бүгд </Text>
        <AntDesign name="arrowright" size={18} color="purple" style={{marginLeft:5}} />
        
      </View>
  </View>
</View>
<ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false} 
        >
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index} style={{ position: "relative" }}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://media.istockphoto.com/id/1442556244/photo/portrait-of-young-beautiful-woman-with-perfect-smooth-skin-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=4S7HufG4HDXznwuxFdliWndEAcWGKGvgqC45Ig0Zqog=",
            }}
            onError={() => console.log("Image load failed!")}
          />

        

          <Text 
            numberOfLines={2} 
            ellipsizeMode="tail" 
            style={
              {  
                color: "#040720", 
                marginLeft: 15, 
                fontSize: 10,  
                width: 100, 
                flexShrink: 1 
              }
            }
          >  Тринити
          </Text>
        </View>
        
      ))}

        </ScrollView>







<Text style={{margin: 40}}>  </Text>
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
