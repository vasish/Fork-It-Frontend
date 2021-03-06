import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import MinibarResults from '../components/MinibarResults.js';
import StarRating from 'react-native-star-rating';

export default class RestResult extends React.Component {
  constructor() {
    super()
  }

  nameCheck(name) {
    if(name.length <= 18) {
      return name;
    }
    if(name.length > 18) {
      return name.slice(0,15) + '...'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={this.props.border ? styles.listItem : styles.listItemNoBorder}
          onPress={Actions.singleresult}>
          <View style={styles.restaurantPic} >
            <Image style={styles.restaurantIcon} source={this.props.img}/>
          </View>
          <View style={styles.restaurantInfo}>
            <View style={styles.restaurantNameContainer}>
              <View style={styles.restaurantName}>
                <Text style={styles.nameText}>{this.nameCheck(this.props.name)}</Text>
              </View>
              <View style={styles.star}>
                <View>
                  <StarRating
                    disabled={false}
                    maxStars={1}
                    rating={0}
                    starSize={40}
                    starColor={'#8D8D8D'}
                    emptyStarColor={'#8D8D8D'}
                  />
                </View>
              </View>
            </View>
            <View style={styles.restaurantDetails}>
              <View style={styles.restaurantStats}>
                <View style={styles.starRating}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.props.rating}
                    starSize={25}
                    starColor={'#ecf000'}
                    emptyStarColor={'#ecf000'}
                  />
                </View>
                <Text style={styles.textDetails}>{this.props.reviews}</Text>
                <Text style={styles.textDetails}>{this.props.distance}</Text>
              </View>
              <TouchableOpacity style={styles.eatIcon}>
                <Image style={styles.menuIcon} source={require("../assets/ForkandKnifeTransparentGrey.png")}/>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: verticalScale(145),
    backgroundColor: 'transparent',
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(4),
    marginBottom: verticalScale(4),
  },
  listItem: {
    backgroundColor: 'rgba(255,255,255,.31)',
    width: scale(358),
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowColor: 'grey',
    shadowOffset: { height: verticalScale(4), width: 0 },
    flex: 1,
    flexDirection: 'row'
  },
  listItemNoBorder: {
    width: scale(375),
    flex: 1,
    flexDirection: 'row'
  },
  restaurantPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: scale(15),
    opacity: 0.7,
  },
  restaurantIcon: {
    height: verticalScale(90),
    width: scale(90),
    borderRadius: scale(90/2),
    borderColor: 'black',
    borderWidth: scale(0.2)
  },
  restaurantInfo: {
    flex: 3,
    paddingLeft: scale(15)
  },
  restaurantNameContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  restaurantName: {
    flex: 3,
    justifyContent: 'center'
  },
  nameText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(20)
  },
  star: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  restaurantDetails: {
    flex: 3,
    flexDirection: 'row'
  },
  restaurantStats: {
    flex: 3,
    justifyContent: 'center',
    bottom: verticalScale(9)
  },
  starRating: {
    width: scale(150),
    marginBottom: verticalScale(10)
  },
  textDetails: {
    fontFamily: 'Futura',
    color: '#8D8D8D',
    fontSize: moderateScale(16)
  },
  eatIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuIcon: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: scale(30)
  }
});
