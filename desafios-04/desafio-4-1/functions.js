module.exports = {
    age: function(timestemp) {
        const today = new Date()
        const birthDate = new Date(timestemp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }
        return age
    },
    date: function(timestemp){
        const date = new Date(timestemp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2) //a contagem é de zero a 11, por isso a adição de + 1
        const day = `0${date.getUTCDate()}`.slice(-2) // slice com esse parametro sempre pegara os dois ultimos digitos

        return {
            year,
            month,
            day,
            iso:`${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    level: function(level_school){
        switch(level_school){
            case '3°F':
                level_school = '3° Ano - Ensino Fundamental';
                break;
                case '4°F':
                level_school = '4° Ano - Ensino Fundamental';
                break;
                case '5°F':
                level_school = '5° Ano - Ensino Fundamental';
                break;
                case '6°F':
                level_school = '6° Ano - Ensino Fundamental';
                break;
                case '7°F':
                level_school = '7° Ano - Ensino Fundamental';
                break;
                case '8°F':
                level_school = '8° Ano - Ensino Fundamental';
                break;
                case '9°F':
                level_school = '9° Ano - Ensino Fundamental';
                break;
                case '1°M':
                level_school = '1° Ano - Ensino médio';
                break;
                case '2°M':
                level_school = '2° Ano - Ensino médio';
                break;
                case '3°M':
                level_school = '3° Ano - Ensino médio';
                break;
        }

        return level_school
    }
}