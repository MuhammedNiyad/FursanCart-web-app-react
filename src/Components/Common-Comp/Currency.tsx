import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useAppSelector } from "../../redux/hook";
import { getCurrencies } from "../../utils/apis";

const Currency = ({ amount }: any) => {
  const currencyType = useAppSelector((state) => state.currency).currencyState;
  const [exgCurr, setExgCurr] = useState<any>([]);
  const [formattedAmount, setFormattedAmount] = useState("");

  // const getExgCurrency = async () => {
  //   const res = await axios.get(
  //     "https://api.exchangerate-api.com/v4/latest/AED"
  //   );
  //   setExgCurr(res?.data?.rates);
  // };
  useQuery("getCurrencyData", getCurrencies, {
    onSuccess(data) {
      setExgCurr(data?.data);
    },
  });

  // console.log(
  //   exgCurr.find((it: any) => it.currencyCode === "AED")?.currencyRate
  // );
  // console.log(currencyType);

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

  useMemo(() => {
    if (amount && currencyType && exgCurr) {
      const fromRate = exgCurr.find(
        (it: any) => it.currencyCode === "AED"
      )?.currencyRate;
      const toRate = exgCurr.find(
        (it: any) => it.currencyCode === currencyType
      )?.currencyRate;
      const convertedAmount = convertCurrency(amount, fromRate, toRate);
      formatCurrency(convertedAmount, currencyType);
    }
  }, [amount, currencyType, exgCurr]);

  return <>{formattedAmount}</>;
};

export default Currency;
