

const Page = ({ params }: { params : { id: string }}) => {


    return (
        <>
            <h1>hello, Dynamic Page!</h1>
            <p>id :: {params.id}</p>
        </>
    )
}
export default Page;