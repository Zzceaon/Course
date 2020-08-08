/*
 * @Author: Zzceaon
 * @Date: 2020-07-31 14:34:03
 * @LastEditTime: 2020-08-08 17:31:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\routes\index.js
 */ 
import React from 'react';
import { Redirect } from 'react-router-dom'
import Home from '../application/Home'
import Rank from '../application/Rank'
import Recommend from '../application/Recommend'
import Singers from '../application/Singers'
import Album from '../application/Album'

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={'/recommend'} />
        )
      },
      {
        path: "/recommend",
        component: Recommend,
        routes: [
          {
            path: '/recommend/:id',
            component: Album
          }
        ]
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: Rank,
        key: 'rank',
        routes: [
          {
            path: '/rank/:id',
            component: Album
          }
        ]
      }
    ]
  }
]