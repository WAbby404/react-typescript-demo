type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

// generic type is a parameterized type, T is a convention

// if we want restrictions to what the generic type can be, we can focus on constraint we have specified
// for example, if we want an array of string or numbers, we can replace {} with string | number
// export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {

export const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {


    return(
        <div>
            <h2>List of Items</h2>
            {items.map((item, index) => {
                return(
                    <div key={item.id} onClick={() => onClick(item)}>
                        {JSON.stringify(item)}
                    </div>
                )
            })}
            {/* {items.map((item, index) => {
                return(
                    <div key={index} onClick={() => onClick(item)}>
                        {JSON.stringify(item)}
                    </div>
                )
            })} */}
        </div>
    )
}