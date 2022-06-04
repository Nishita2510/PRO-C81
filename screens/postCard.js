import React,{Component} from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PostCard extends component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.actionContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                            source={require("../assets/profile_img.png")}
                            style={styles.profileImage}
                            >
                            </Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                          <Text style={authorNameContainer}>{this.props.post.auth}</Text>
                        </View>
                    </View>
                    <Image 
                     source={require("../assets/post.jpeg")}
                     style={styles.postImage}
                     />
                    <View style={styles.captionContainer}>
                      <Text style={styles.captionText}>
                        {this.props.post.caption}
                      </Text>
                    </View>
                    <View style={styles.actionContainer}> 
                      <View style={styles.likeButton}>
                        <Ionicons name={"hearts"}
                        size={RFValue(30)}
                        color={"white"}
                        />
                        <Text style={styles.likeText}>
                          12k
                        </Text>
                      </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    authorImageContainer: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    profileImage: {
      resizeMode: "contain",
      width: "30%",
      alignSelf: "center",
      height: RFValue(50)
    },
    postImage: {
      resizeMode: "contain",
      width: "60%",
      alignSelf: "center",
      height: RFValue(100)
    },
    authorContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    authorNameContainer: {
      fontSize: RFValue(25),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    storyAuthorText: {
      fontSize: RFValue(18),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    captionContainer: {
      fontSize: RFValue(25),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    captionText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10)
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
  });