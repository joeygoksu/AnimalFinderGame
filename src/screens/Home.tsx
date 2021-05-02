import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Layout, Text } from '@ui-kitten/components';
import TeamSpirit from '../assets/team-spirit.svg';

import Happy from '../assets/expressions/happy.svg';
import Neutral from '../assets/expressions/neutral.svg';
import Cry from '../assets/expressions/cry.svg';
import { CustomTopNavigation } from '../components/CustomTopNavigation';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { iGameReducer } from '../store/reducers';
import { gameStarted } from '../store/actions/game';

interface HomeProps {
  navigation: any;
}

const image = { uri: 'https://reactjs.org/logo-og.png' };

export const HomeScreen: React.FunctionComponent = ({ navigation }) => {
  const dispatch = useDispatch();

  const { hasStarted, animalName } = useSelector(
    (state: { game: iGameReducer }) => ({
      hasStarted: state.game.hasStarted,
      level: state.game.level,
      answerStatus: state.game.answerStatus,
      animalName: state.game.question?.animalName,
    }),
    shallowEqual,
  );

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView>
        <CustomTopNavigation />

        {hasStarted ? (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text} category="h3">
                Find the {animalName}
              </Text>
            </View>

            <View style={styles.animalsContainer}>
              <TouchableOpacity style={styles.animalCard} onPress={() => {}}>
                <ImageBackground
                  source={image}
                  style={{
                    flex: 1,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.text}>Inside</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text} category="h3">
                Rules
              </Text>

              <Text style={styles.text} category="s1">
                To win the game reach level 5.
              </Text>
              <Text style={styles.text} category="s1">
                3 consecutive correct answer increase the level.
              </Text>
            </View>

            <View style={styles.contentContainer}>
              <TouchableOpacity
                style={styles.activeCard}
                onPress={() => {
                  dispatch(gameStarted());
                }}>
                <Text category="s1">Let's Start</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </SafeAreaView>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        {/* <TeamSpirit height={hp('13%')} /> */}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 2,
    fontFamily: 'Montserrat',
  },
  animalsContainer: {
    paddingVertical: 5,
    marginHorizontal: 10,

    height: 500,

    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  animalCard: {
    backgroundColor: '#fff',

    width: 110,
    height: 110,

    marginHorizontal: 5,
    // borderRadius: 150,

    borderColor: '#000000',
    borderWidth: 3,

    // padding: 5,
    marginVertical: 10,

    // SHADOW
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 9,
  },
  activeCard: {
    backgroundColor: '#7BED9F',

    width: wp('50%'),
    height: hp('5%'),

    marginHorizontal: 5,
    borderRadius: 6,

    borderColor: '#000000',
    borderWidth: 3,

    padding: 5,
    marginVertical: 10,

    // SHADOW
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 9,

    // Inside Position
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  passiveCard: {
    backgroundColor: 'white',

    width: wp('20%'),
    height: hp('5%'),

    marginHorizontal: 5,
    borderRadius: 6,

    borderColor: '#000000',
    borderWidth: 3,

    padding: 5,
    marginVertical: 10,

    // SHADOW
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 9,

    // Inside Position
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  simpleCard: {
    backgroundColor: 'white',
    width: wp('45%'),
    height: hp('10%'),
    borderRadius: 16,

    borderColor: '#000000',
    borderWidth: 3,

    padding: 5,
    marginVertical: 10,

    // SHADOW
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 9,

    // Inside Position
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  voteCard: {
    backgroundColor: 'white',
    width: wp('29%'),
    height: hp('10%'),
    borderRadius: 16,

    borderColor: '#000000',
    borderWidth: 3,

    padding: 5,

    // SHADOW
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 9,

    // Inside Position
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
