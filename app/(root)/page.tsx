import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn = { firstName: "Michael", lastName: "Awuni", email: "michaelawunikofi@gmail.com" }
  return (
    <section className="home">
        <div className="home-content">
           <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "Guest" }
                subtext="Access and manage your account and transactions efficiently"
                />

            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={876.89}
            />
        </div>

        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50}, {currentBalance: 234.89}]} 
            />
    </section>
  )
}

export default Home