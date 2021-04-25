import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import MatchBox from '../components/MatchBox'
import MoreBetButton from '../components/MoreBetButton'
import GameTypeBar from '../components/GameTypeBar'

import '../index.css'
import '../components/App/App.css'
import '../components/MatchBox/MatchBox.css'
import '../components/MoreBetButton/MoreBetButton.css'

let info = {
  "Name": "BAUSuperMassive - Istanbul",
  "Quicklink": "http://sports.betway.com/esports/league-of-legends/tcl-summer/bausupermassive-istanbul",
  "Keywords": {
    "Keyword": [
      {
        "_type_cname": "team",
        "_cname": "bausupermassive",
        "__text": "[BAUSuperMassive]"
      },
      {
        "_type_cname": "team",
        "_cname": "istanbul",
        "__text": "[Istanbul]"
      },
      {
        "_type_cname": "sport",
        "_cname": "esports",
        "__text": "[eSports]"
      },
      {
        "_type_cname": "country",
        "_cname": "league-of-legends",
        "__text": "[League of Legends]"
      },
      {
        "_type_cname": "league",
        "_cname": "tcl-summer",
        "__text": "[TCL Summer]"
      }
    ]
  },
  "Market": {
    "Name": "Match Winner",
    "Outcome": [
      {
        "Name": "BAUSuperMassive",
        "Quicklink": "http://sports.betway.com/esports/league-of-legends/tcl-summer/bausupermassive-istanbul/match-winner/--home-team-",
        "_id": "431121534",
        "_index": "1",
        "_type_cname": "home",
        "_cname": "--home-team-",
        "_price_num": "1",
        "_price_den": "10",
        "_price_dec": "1.1",
        "_starting_price": "false"
      },
      {
        "Name": "Istanbul",
        "Quicklink": "http://sports.betway.com/esports/league-of-legends/tcl-summer/bausupermassive-istanbul/match-winner/--away-team-",
        "_id": "431121535",
        "_index": "2",
        "_type_cname": "away",
        "_cname": "--away-team-",
        "_price_num": "19",
        "_price_den": "4",
        "_price_dec": "5.75",
        "_starting_price": "false"
      }
    ],
    "_id": "110917243",
    "_index": "10",
    "_type_cname": "to-win",
    "_cname": "match-winner",
    "_handicap": "0",
    "_situation_index": "70",
    "_each_way_active": "f",
    "_each_way_fraction_den": "1",
    "_each_way_position": "1",
    "_tricast": "f",
    "_forecast": "f",
    "_interval_from": "null",
    "_interval_to": "null"
  },
  "_id": "4229881",
  "_cname": "esports",
  "_start_at": "2019/06/15 12:00:00 UTC",
  "_home_team_cname": "bausupermassive",
  "_away_team_cname": "istanbul",
  "_started": "f"
};



storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Match Box', module)
  .add('More Bet Button', () =>
    <MoreBetButton
      quicklink="#"
      t1odds='1.2'
      t2odds='1.9'
    />)
  .add('Match Box', () => (<MatchBox data={info}/>));

storiesOf('Game Type', module)
  .add('Game Type Bar', () =>
    <GameTypeBar
      data="hi"
    />
  );
