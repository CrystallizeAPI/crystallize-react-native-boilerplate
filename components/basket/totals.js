import React from 'react';
import {View, Text} from 'react-native';
import {useBasket} from './index';

export const Totals = () => {
  const {total} = useBasket();

  return (
    <View>
      <Text>Totals</Text>
      {/* <Rows>
        <Row modifier="total-price">
          <span>Total Price:</span>
          <span>{total.net}</span>
        </Row> */}
      {/* {discount && (
          <>
            <Row modifier="discount">
              <span>{t('basket.discount')}:</span>
              <span>{t('common.price', { value: discount })}</span>
            </Row>
            <Row modifier="total-after-discount">
              <span>{t('common.totalPriceAfterDiscount')}:</span>
              <span>
                {t('common.price', { value: totalPriceMinusDiscount })}
              </span>
            </Row>
          </>
        )} */}

      {/* <Row modifier="total-vat">
          <span>{t('basket.vat')}:</span>
          <span>{t('common.price', {value: total.vat})}</span>
        </Row>
        <Row modifier="to-pay">
          <span>{t('basket.totalToPay')}:</span>
          <span>{t('common.price', {value: total.gross})}</span>
        </Row>
      </Rows> */}
    </View>
  );
};
