import react from 'react'
import {View, Text, Button} from 'react-native'

const Dashboard = props => {
    return (
        <View>
            <Text>صفحه داشبورد</Text>
            <Button title='بیمارستان‌ها' onPress={() => props.navigation.navigate('Hospitals')}/>
        </View>
    )
}
export default Dashboard;