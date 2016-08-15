import * as React from 'react';
import * as Relay from "react-relay";
import { Link } from 'react-router';
import {
  ItemIOS
} from '../../vender.src/components/ItemIOSComp';
import {
  Counter
} from '../../vender.src/components/CounterComp';
import {
  Banner
} from '../../vender.src/components/BannerComp';
import {
  MountAnima,
  MountAnimaShow
} from '../../vender.src/components/Animate';
import {
  Text
} from "../../vender.src/components/TextComp";
import {
  GoodsItem,
  GoodsKUASimple,
  BigBtn
} from "../../vender.src/components/MallComp";
const skeleton = require('../assets/css/skeleton.styl');

export interface DetailProps {};

class Detail extends React.Component<DetailProps, {}>{

  componentDidMount(){

  }

  render(){
    let ui_kuas = this.props.goodsDetail.kuas.map((kua, index) => {
      return <GoodsKUASimple className={`${skeleton.goodskua}`} key={index} kuas={kua.key}>
        {kua.name}
      </GoodsKUASimple>;
    });
    return <div className={`${skeleton.info} info`}>
      <div className={skeleton.root}>
        <div>
          <MountAnima>
            <div className={`${skeleton.detail} detail`}>
              <GoodsItem goodsInfo={this.props.goodsDetail.price}>
                {this.props.goodsDetail.name}
              </GoodsItem>
            </div>
            {ui_kuas}
            <ItemIOS className={skeleton.fare} title="运费">
              <span>￥12.00</span>
              <span>0.00</span>
            </ItemIOS>
            <div className={skeleton.address}>
              <span>收货人：{`蒋先生`}</span>
              <span className={skeleton.phone}>{`13966668888`}</span>
              <p>收货地址：{`深圳市福田区梅林路万科大厦数据与信息中心住这儿部门`}</p>
            </div>
            <ItemIOS className={skeleton.itemIOS} title='数量'>
              <Counter></Counter>
            </ItemIOS>
            <ItemIOS className={skeleton.weixin} title="付款方式">
              <span>微信支付</span>
            </ItemIOS>
            <ItemIOS className={skeleton.total} title="合计金额">
              <span>￥12.00</span>
            </ItemIOS>
          </MountAnima>
        </div>
      </div>
      <BigBtn to={`/order/${this.props.goodsDetail.id}`}>付款</BigBtn>
    </div>;
  }
}

export default Relay.createContainer(Detail, {
  fragments: {
    goodsDetail: () => Relay.QL`
      fragments on GoodsDetail {
        id,
        name,
        price,
        hasSold,
        kuas{
          name,
          key
        }
      }
    `
  }
})
