import { View, Text, StyleSheet } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { FlatList } from "react-native";

export default function Home(){
    type Aluno = {
        nome: string;
        cidade: string;
    }

    let Alunos = [
        {id: "1", nome: "Henry", cidade: "Pintópolis"},
        {id: "2", nome: "Caio", cidade: "Tetakocacete"},
        {id: "3", nome: "Gaybriel", cidade:"Sixseven"}
    ]

    while(Alunos.length <3) {
    Alunos.push({id: "id" ,nome: "Aluno", cidade: "Cidade"});
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Alunos}
                renderItem={({ item }) => (
                    <Text>{item.nome} - {item.cidade}</Text>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});










{/* <Text>{Alunos.map((aluno) => `${aluno.nome} - ${aluno.cidade}`).join('\n')}</Text> */}