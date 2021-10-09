import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import { List, Checkbox } from 'react-native-paper';

export default function TodoItem({ navigation, index, item, updated }) {
    // タスクをチェックした際に呼ばれるアクション
  const checked = ({index, item }) => {
    // データを更新（フラグを反転）
    item.set('checked', !item.get('checked'));
    // 保存
    item.save();
    updated({index, item});
  };
  
  // リスト（各行）の表示処理
  return (<List.Item
    title={item.get('body')}
    // リストをタップしたら、編集画面に遷移する
    onPress={() => navigation.push('Detail', { index, item, updated })}
    // タスクの完了状態を見てチェックボックスを変更
    left={props => <Checkbox
      status={item.get('checked') ? 'checked' : 'unchecked'}
      // チェックボックスをタップしたら、完了状態を反転
      onPress={() => checked({index, item})}
      />
    }
    // > を表示
    right={props => <List.Icon
        icon="chevron-right"        
      />
    }
  />)
}