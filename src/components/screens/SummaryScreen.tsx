import { summaryScreenMock } from '../../redux/mocks';
import { PieChartColorList1 } from '../../values/customColors';
import { MinPieChart } from '../widgets/MinPieChart';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectSubs } from '../../redux/subsSlice';
import { useEffect } from "react"
import { fetchSubs } from '../../redux/subsSlice';
import { Loading } from '../widgets/Loading';
import {Error} from '../widgets/Error'


export const SummaryScreen = () => {
  const dispatch = useAppDispatch();
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

  if (status === 'loading') {
    return (<Loading/>)
  }

  if (status === 'failed') {
    return <Error error={error}/>
  }

  return (
    <div className="grid grid-cols-1 h-full w-full justify-items-center">
      <div className='w-4/5 aspect-square relative'>
        <MinPieChart data={subscriptions} colors={colors} />
        <div className='text-green-400 text-5xl z-0 h-full w-full absolute top-0 left-0 align-center flex justify-center items-center'>
          { `£${subscriptions.reduce((accumulator,sub) => {
            return accumulator + sub.monthlyPrice;
          },0).toFixed(0)}` }
        </div>
      </div>
      <div className='flex flex-col w-full px-12 mt-4 pb-6'>
        { subscriptions.map((sub, index) => {
            return (
              <div
                key={index}
                className='flex justify-between items-center px-6 mb-6 rounded-3xl h-24 border-2 border-white'
                style={{ color: colors[index % colors.length] }}
              >
                <p className='text-3xl'>{sub.name}</p>
                <p className='text-2xl'>£{sub.monthlyPrice.toFixed(2)}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}