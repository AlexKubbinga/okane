import { MerchantType, SubscriptionType } from "../../values/customTypes"

//TODO: the type for the input will need to be "merchant[] || sub[] || cat[]" but these don't exist yet.
// Add in once available.
export const ItemList = ({ data, colors } : { data: SubscriptionType[] | MerchantType[], colors: string[] }) => {
  return (
    <>
    { data.map((item, index) => {
        return (
          <div
            key={index}
            className='flex justify-between items-center px-6 mb-6 rounded-3xl h-24 border-2 border-white'
            style={{ color: colors[index % colors.length] }}
          >
            <p className='text-3xl'>{item.name}</p>
            <p className='text-2xl'>£{item.monthlyPrice.toFixed(2)}</p>
          </div>
        )
      })
    }
    </>
  )
}