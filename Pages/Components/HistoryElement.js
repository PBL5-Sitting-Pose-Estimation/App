import React, {useEffect, useState, useMemo} from 'react';
import { Alert, Modal, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import Toast from 'react-native-simple-toast';
import RadioGroup from 'react-native-radio-buttons-group';
import ExpoFastImage from 'expo-fast-image';
import * as Speech from 'expo-speech';
import axios from "axios"

import { API_URL } from '../../Utils/constants.js'

const HistoryElement = (props) => {
    const [content, SetContent] = useState('')
    const [modalVisible, SetModalVisible] = useState(false);
    const [buttonType, SetButtonType] = useState(true)
    const [isVisible, SetIsVisible] = useState(true)
    const [warning, SetWarning] = useState('')
    const [userLabel, SetUserLabel] = useState(props.item.user_label)

    let count = 0
    
    const colorList = {'Warning':'#ffba13', 'Compliment':'#006400'}
    const borderColor = {'Wrong':'red', 'Correct':'green'}

    const title = [['Wrong', 'Warning'], ['Correct', 'Compliment']]
    const notify = {'Gac chan': title[0], 'Thang lung': title[1], 'Gu lung': title[0], 
                    'Nghieng nguoi': title[0], 'Ngu gat': title[0], 'Ngoi xom': title[0], 'Nga lung': title[0]}

    const contentSample = {
        'Gac chan': 'Bạn đang ngồi gác chân, thói quen này khiến máu khó lưu thông, dẫn đến tê chân ' + 
                     'khi đứng lên, đây là thói quen xấu sẽ ảnh hưởng đến sức khoẻ của bạn sau này!', 
        'Thang lung': 'Bạn đang ở trong một tư thế ngồi lý tưởng! Hãy cố gắng duy trì điều đó!', 
        'Gu lung': 'Bạn đang ngồi khom người với một góc bé hơn 90 độ giữa thân và đùi, ' + 
                    'điều này đưa bạn đến gần màn hình hơn, dẫn đến cận thị nhanh chóng và lưng gù!', 
        'Nghieng nguoi': 'Bạn đang ngồi nghiêng mình qua 1 bên, nếu bạn duy trì tư thế này trong thời gian dài ' + 
                        'sẽ khiến thân hình bạn mất cân đối! Hãy loại bỏ nó ngay trước khi quá muộn!', 
        'Ngu gat': 'Bạn đang ngủ gật trong khi đang ngồi làm việc, điều này là không tốt vì nó ảnh hưởng đến hiệu quả ' +
                    'công việc của bạn! Nếu bạn muốn nghỉ ngơi một chút, hãy lên giường nằm sẽ tốt cho tư thế bạn hơn!', 
        'Ngoi xom': 'Bạn đang ngồi xổm, tư thế này sẽ khiến máu khó lưu thông để cung cấp oxi đến các cơ chân ' +
                    '=> tê chân, ảnh hưởng xấu đến sức khoẻ và đặc biệt, bạn sẽ đau nhức 2 chân khi về già!', 
        'Nga lung': 'Bạn đang ngả lưng, tư thế này sẽ khiến khoảng cách từ mắt đến bàn làm việc trở nên xa hơn dẫn ' +
                    'đến mắt phải điều tiết nhiều hơn => không tốt cho thị lực của bạn! Nếu bạn muốn thư giãn, hãy đứng lên và đi dạo vài vòng!'
    }

    const basePath = API_URL + 'history/img/'

    const radioButtons = useMemo(() => ([
        {
            id : 1, // acts as primary key, should be unique and non-empty string
            label: 'Gac chan',
            value: 'Gac chan'
        },
        {
            id : 2,
            label: 'Thang lung',
            value: 'Thang lung'
        },
        {
            id : 3,
            label: 'Gu lung',
            value: 'Gu lung'
        },
        {
            id : 4,
            label: 'Nghieng nguoi',
            value: 'Nghieng nguoi'
        },
        {
            id : 5,
            label: 'Ngu gat',
            value: 'Ngu gat'
        },
        {
            id : 6,
            label: 'Ngoi xom',
            value: 'Ngoi xom'
        },
        {
            id : 7,
            label: 'Nga lung',
            value: 'Nga lung'
        }
    ]), []);

    const handleMoreView = () => {
        if (content === ''){
            // SetContent(props.item.content)
            SetContent('good job')
        }
        else{
            SetContent('')
        }
    }
    const [open, SetOpen] = useState(true)

    const handleCorrectBtn = () => {
        // Toast.show('Update predict information successfully!', 2)
        SetModalVisible(true)
        SetButtonType(true)
        // open = true
        SetOpen(true)
        // console.log(open)
    }
    const handleWrongBtn = () => {
        SetModalVisible(true)
        SetButtonType(false)
        // open = true
        SetOpen(true)
        // console.log(open)
    }
    const handleChangeInfor = () => {
        // Toast.show('Update predict information successfully!', 2)
        // open = false
        SetOpen(false)
        SetIsVisible(true)
    }

    useEffect(() => {
        if(open == false){
            setTimeout(() => {
                if(!modalVisible){
                    SetIsVisible(false)
                    // console.log(open)
                }
            }, 1000)
        }
    }, [open])

    const handleConfirmCorrect = (id) => {
        SetModalVisible(!modalVisible)
        SetIsVisible(false)
        axios
            .post(API_URL + 'fb', {
                id: id,
                user_label: props.item.predict_label
            })
            .then(res => {
                console.log(res.data)
                SetUserLabel(props.item.predict_label)
            })
            .catch(e => {
                console.log(`post userLabel (correct) error ${e}`)
            })
    }

    const handleConfirmWrong = (id) => {
        SetModalVisible(!modalVisible)
        SetIsVisible(false)
        axios
            .post(API_URL + 'fb', {
                id: id,
                user_label: radioButtons[selectedId-1].value
            })
            .then(res => {
                console.log(res.data)
                SetUserLabel(radioButtons[selectedId-1].value)
            })
            .catch(e => {
                console.log(`post userLabel (wrong) error ${e}`)
            })
    }

    const parseDate = (str) => {
        let date = str.split('_')[0]
        let time = str.split('_')[1].replaceAll('-', ':').slice(0, -7)
        // console.log(date + ", " + time)
        d = new Date(Date.parse(date))
        // console.log(d.toLocaleDateString())
        return time + ' ' + d.toLocaleDateString()
    }

    const getId = () => {
        value = props.item.predict_label
        if (props.item.user_label !== '')
            value = props.item.user_label

        return radioButtons.find(item => item.value === value).id
    }

    const [selectedId, setSelectedId] = useState(getId())

    useEffect(() => {
        // console.log(props.item)
        if(props.item.got_feedback){
            SetIsVisible(false)
        }
    }, [])

    return (
        <View style={[styles.container, {borderTopColor: borderColor[notify[props.item.predict_label][0]]}]}>
            <View style={{flexDirection: 'row', gap: 20}}>
                <Text 
                    style={styles.title}>{`${props.item.predict_label} (${notify[props.item.predict_label][0]})`}</Text>
                    <TouchableOpacity                        
                        onPress={() => {
                            count += 1
                            let support = false
                            if(count == 1){
                                Speech.getAvailableVoicesAsync().then(voices => {
                                    for(voice of voices){
                                        if(voice['language'].toString() === 'vi-VN') support = true
                                    }
                                    if(support){
                                        Speech.speak(contentSample[props.item.predict_label],{
                                            language: 'vi-VN',
                                            pitch: 1,
                                            rate: 1.0,
                                            // voice: 'com.apple.ttsbundle.Samantha-compact',
                                            onDone: () => {count = 0}
                                        });
                                    }
                                    else{
                                        count = 0
                                        SetWarning('Your phone not support Vietnamese voice! You can fix this by change your device text-to-speech engine to google!')
                                        
                                        setTimeout(() => {
                                            SetWarning('')
                                        }, 4000)
                                    }
                                });
                            }
                            if(count == 2){
                                count = 0
                                Speech.stop()
                            }
                        }}
                    >                                
                        <Image
                            style={styles.imgSpeaker}
                            source={require('../../Public/megaphone.png')}
                        />
                    </TouchableOpacity>
            </View>
            <Text style={{color: 'red', height: (warning === '')? 0:'auto'}}>{warning}</Text>
            <Text
                style={styles.moreView}
                onPress={handleMoreView}
            >
                View more
            </Text>
            <Text
                style={[styles.content, {height: (content==='')? 0 : 'auto'}]}
            >{contentSample[props.item.predict_label]}</Text>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                    style={[styles.label, {color: colorList[notify[props.item.predict_label][1]]}]}
                    >{notify[props.item.predict_label][1]}</Text>
                <Text
                    style={styles.datetime}
                    >{parseDate(props.item.detect_date)}</Text>
            </View>
            <Image
                source={{uri: basePath + props.item.path}}
                style={styles.image}
                cacheKey={props.item.path}
                fadeDuration={0}
             />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    SetModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {
                    buttonType? (
                        <>
                        <Text style={styles.modalText}>Are you sure to confirm this prediction is correct?</Text>
                        <View style={styles.foot}>
                            <TouchableOpacity
                                onPress={() => handleConfirmCorrect(props.item._id)}
                            >
                                <Text style={styles.btnConfirm}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    SetModalVisible(!modalVisible)                                    
                                    SetOpen(false)
                                }}
                            >
                                <Text style={styles.btnCancel}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        </>
                    )
                    : (
                        <>
                        <Text style={styles.modalText}>Choose the label you think is right for this pose!</Text>               
                        <RadioGroup 
                            radioButtons={radioButtons} 
                            onPress={setSelectedId}
                            selectedId={selectedId}
                            containerStyle={styles.gpRadio}
                        />
                        <View style={styles.foot}>
                            <TouchableOpacity
                                onPress={() => handleConfirmWrong(props.item._id)}>
                            <Text style={styles.btnConfirm}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    SetModalVisible(!modalVisible)
                                    SetOpen(false)
                                }}>
                            <Text style={styles.btnCancel}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        </>
                    )
                    }
                </View>
                </View>
            </Modal>
             <View style={[styles.foot, {flex: 1}]}>
            {
                isVisible? (
                    <>
                        <Text style={{fontSize: 17, fontStyle: 'italic'}}>Predict?</Text>
                        <TouchableOpacity
                            onPress={() => handleCorrectBtn()}
                        >
                            <Text style={styles.btnCorrect}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleWrongBtn()}
                        >
                            <Text style={styles.btnWrong}>Wrong</Text>
                        </TouchableOpacity>
                    </>
                )
                : (
                    <>
                        <Text style={[styles.inforText1, {color: props.item.predict_label == userLabel? 'green':'red'}]}>
                            {props.item.predict_label == userLabel? 'This is a correct predict!' : `This is a wrong predict!\n(True label: ${userLabel})`}
                        </Text>
                        <Text
                            style={styles.inforText2}
                            onPress={() => handleChangeInfor()}
                        >Change</Text>
                    </>
                )
            }
                
             </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItem: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderWidth: 1,
        // borderStyle: 'dashed',
        borderRadius: 17,
        borderColor: '#8F9FBF',
        borderTopWidth: 4,
        padding: 5,
        paddingHorizontal: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imgSpeaker:{
        width: 20,
        height: 20
    },
    moreView: {
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
    content: {
        fontFamily: 'Nunito regular'
    },
    label:{
        fontSize: 15,
        fontFamily: 'Nunito'
    },
    datetime:{
        marginEnd: 10
    },
    image: {
        marginTop: 10,
        width: '100%',
        height: 300
    },
    foot: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    btnCorrect:{
        marginStart: 20,
        marginEnd: 20,
        padding: 10,
        width: 80,
        textAlign: 'center',
        paddingVertical: 6,
        borderRadius: 10,
        color: 'white',
        backgroundColor: '#00e277',
        overflow: 'hidden'
    },
    btnWrong:{
        padding: 10,
        width: 80,
        textAlign: 'center',
        paddingVertical: 6,
        borderRadius: 10,
        color: 'white',
        backgroundColor: '#ff3442',
        overflow: 'hidden'
    },
    inforText1: {
        fontSize: 14,
        fontStyle: 'italic',
        marginEnd: 20
    },
    inforText2: {
        fontSize: 17,
        textDecorationLine: 'underline',
        color: 'blue'
    },

    gpRadio:{
        alignItems: 'flex-start'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 2,
        // borderColor: 'green'
        backgroundColor: '#fce5cd'
    },
    btnConfirm: {
        marginStart: 20,
        padding: 10,
        width: 80,
        textAlign: 'center',
        paddingVertical: 6,
        borderRadius: 10,
        color: 'black',
        backgroundColor: '#00e277',
        marginTop: 10,
        overflow: 'hidden'
    },
    btnCancel: {
        marginStart: 20,
        padding: 10,
        width: 80,
        textAlign: 'center',
        paddingVertical: 6,
        borderRadius: 10,
        color: 'black',
        backgroundColor: '#ff3442',
        marginTop: 10,
        overflow: 'hidden'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 15
    },
})

export default HistoryElement;