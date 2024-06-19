import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../../redux/hook";

const Currency = ({ amount }: any) => {
  const currencyType = useAppSelector((state) => state.currency).currencyState;
  const [exgCurr, setExgCurr] = useState();
  const [formattedAmount, setFormattedAmount] = useState("");

  const getExgCurrency = async () => {
    const res = await axios.get(
      "https://api.exchangerate-api.com/v4/latest/AED"
    );
    setExgCurr(res?.data?.rates);
  };

  const convertCurrency = (amount: any, fromRate: any, toRate: any) => {
    return (amount / fromRate) * toRate;
  };

  const formatCurrency = (amount: any, currency: any) => {
    const formatter = new Intl.NumberFormat(undefined, {
      currency: currency,
      style: "currency",
    });
    const formattedData = formatter.format(amount);
    setFormattedAmount(formattedData);
  };

  useEffect(() => {
    getExgCurrency();
  }, [amount]);

  useMemo(() => {
    if (amount && currencyType && exgCurr) {
      const fromRate = exgCurr["AED"];
      const toRate = exgCurr[currencyType];
      const convertedAmount = convertCurrency(amount, fromRate, toRate);
      formatCurrency(convertedAmount, currencyType);
    }
  }, [amount, currencyType, exgCurr]);

  return <>{formattedAmount}</>;
};

export default Currency;
