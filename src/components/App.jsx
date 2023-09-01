
import {UserProfile} from './profile/UserProfile';
import user from '../data/user.json';

import {StatsBoard} from 'components/statistics/StatisticsBoard';
import data from '../data/data.json';

import { FriendList } from 'components/friendlist/FriendList';
import friends from '../data/friends.json'

import { TransactionHistory } from "./transaction/Transaction";
import transactions from '../data/transactions.json';

import {Container} from './App.styled.js';

export const App = () => {
  return (
    <Container>
    <div
      style={{
        height: '100vh',
       
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <UserProfile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<StatsBoard title="Upload stats" data={data} />



<FriendList friends={friends} />

<TransactionHistory transactions={transactions} />;
    </div></Container>
  );
};

