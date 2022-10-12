import { summaryScreenMock } from '../../redux/mocks';
import { PieChartColorList1 } from '../../values/customColors';
import { MinPieChart } from '../widgets/MinPieChart';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectSubs } from '../../redux/subsSlice';
import { useEffect } from "react"
import { fetchSubs } from '../../redux/subsSlice';
import { Loading } from '../widgets/Loading';
import {Error} from '../widgets/Error'
import { ItemList } from '../widgets/ItemList';
import { fetchMerchants } from '../../redux/merchantsSlice';
import { useNavigate } from "react-router-dom";
import { SubscriptionType } from '../../values/customTypes';


export const SummaryScreen = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const subscriptionsState = useAppSelector(selectSubs)

  const subscriptions = subscriptionsState.data
  const error = subscriptionsState.error
  const status = subscriptionsState.status
  const colors = PieChartColorList1;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSubs())
    }
  },[dispatch, status])

  // TODO: Loading/failed logic to be added to redux.
  if (status === 'loading') {
    return (<Loading/>)
  }
  if (status === 'failed') {
    return <Error error={error}/>
  }

  const handleClick = (item: SubscriptionType) => {
    dispatch(fetchMerchants(item.subscription_id))
    navigate(`analysis/${item.name}`)
  }

  const formatDate = new Date(subscriptionsState.month).toLocaleDateString('en-GB', {
    month: 'short',
    year: '2-digit',
  })

  return (
    <div className="grid grid-cols-1 h-full w-full justify-items-center">
      <div className='mt-3 text-white text-3xl font-semibold'>
        {formatDate}
      </div>
      <div className='w-4/5 aspect-square relative'>
        <MinPieChart data={subscriptions} colors={colors} />
        <div className='text-green-400 text-5xl z-0 h-full w-full absolute top-0 left-0 align-center flex justify-center items-center'>
          { `£${subscriptions.reduce((accumulator,sub) => {
            return accumulator + sub.monthlyPrice;
          },0).toFixed(0)}` }
        </div>
      </div>
      <div className='flex flex-col w-full px-12 mt-4 pb-6'>
        <ItemList data={subscriptions} colors={colors} callback={handleClick} />
      </div>
    </div>
  );
}