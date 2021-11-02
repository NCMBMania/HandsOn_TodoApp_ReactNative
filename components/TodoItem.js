import React from 'react';
import { List, Checkbox } from 'react-native-paper';

export default function TodoItem({ navigation, index, item, updated }) {
    // タスクをチェックした際に呼ばれるアクション
  const checked = ({index, item }) => {
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