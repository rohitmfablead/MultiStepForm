import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import { DEVICE_STYLES } from '../utils/theme';
import { down } from '../assest/Image';

const CustomDatePicker = ({ 
    day, month, year, 
    onDayChange, onMonthChange, onYearChange 
}) => {
    const [isDayModalVisible, setIsDayModalVisible] = useState(false);
    const [isMonthModalVisible, setIsMonthModalVisible] = useState(false);
    const [isYearModalVisible, setIsYearModalVisible] = useState(false);

    // Days Array (1 to 31)
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    // Months Array (1 to 12)
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    // Years Array (1980 to current year)
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1980 + 1 }, (_, i) => (1980 + i).toString());

    return (
        <View style={styles.container}>

            <Text style={styles.label}>Date of Birth*</Text>

            <View style={styles.boxContainer}>

                {/* Day Box */}
                <TouchableOpacity onPress={() => setIsDayModalVisible(true)} style={[styles.inputContainer,{borderColor: day ? 'green' : 'gray'}]}>
                    <View style={[styles.box,{borderColor: day ? 'green' : 'gray'}]}>
                        <Text style={styles.value}>{day ? day : 'DD'}</Text>
                        <Image style={styles.icon} source={down}/>
                    </View>
                </TouchableOpacity>

                {/* Month Box */}
                <TouchableOpacity onPress={() => setIsMonthModalVisible(true)} style={styles.inputContainer}>
                    <View style={[styles.box,{borderColor: month ? 'green' : 'gray'}]}>
                        <Text style={styles.value}>{month ? month : 'MM'}</Text>
                        <Image style={styles.icon} source={down}/>
                    </View>
                </TouchableOpacity>

                {/* Year Box */}
                <TouchableOpacity onPress={() => setIsYearModalVisible(true)} style={styles.inputContainer}>
                    <View style={[styles.box,{borderColor: year ? 'green' : 'gray'}]}>
                        <Text style={styles.value}>{year ? year : 'YYYY'}</Text>
                        <Image style={styles.icon} source={down}/>
                    </View>
                </TouchableOpacity>

            </View>

            {/* Day Modal */}
            <Modal
                transparent={true}
                visible={isDayModalVisible}
                animationType="slide"
                onRequestClose={() => setIsDayModalVisible(false)}

            >
                <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsDayModalVisible(false)}
                style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Day</Text>
                        <ScrollView contentContainerStyle={styles.modalOptionsContainer}>
                            {days.map(d => (
                                <TouchableOpacity key={d} onPress={() => { onDayChange(d); setIsDayModalVisible(false); }} style={styles.modalOption}>
                                    <Text style={styles.modalOptionText}>{d}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        <TouchableOpacity onPress={() => setIsDayModalVisible(false)} style={styles.modalOption}>
                            <Text style={styles.modalOptionText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

            {/* Month Modal */}
            <Modal
                transparent={true}
                visible={isMonthModalVisible}
                animationType="slide"
                onRequestClose={() => setIsMonthModalVisible(false)}
            >
               <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsMonthModalVisible(false)} 
                style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Month</Text>
                        <ScrollView contentContainerStyle={styles.modalOptionsContainer}>
                            {months.map(m => (
                                <TouchableOpacity key={m} onPress={() => { onMonthChange(m); setIsMonthModalVisible(false); }} style={styles.modalOption}>
                                    <Text style={styles.modalOptionText}>{m}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        <TouchableOpacity onPress={() => setIsMonthModalVisible(false)} style={styles.modalOption}>
                            <Text style={styles.modalOptionText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

            {/* Year Modal */}
            <Modal
                transparent={true}
                visible={isYearModalVisible}
                animationType="slide"
                onRequestClose={() => setIsYearModalVisible(false)}
            >
               <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsYearModalVisible(false)} 
                 style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Year</Text>
                        <ScrollView contentContainerStyle={styles.modalOptionsContainer}>
                            {years.map(y => (
                                <TouchableOpacity key={y} onPress={() => { onYearChange(y); setIsYearModalVisible(false); }} style={styles.modalOption}>
                                    <Text style={styles.modalOptionText}>{y}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        <TouchableOpacity onPress={() => setIsYearModalVisible(false)} style={styles.modalOption}>
                            <Text style={styles.modalOptionText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginTop: 50,
        borderRadius: 10,
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        color: '#000',
        fontSize: 15,
        fontWeight: '700'
    },
    inputContainer: {
        alignItems: 'center',
    },
    box: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: 115, 
        height: 50,
        borderRadius: 5,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    value: {
        fontSize: 18,
        fontWeight: '400',
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        height: DEVICE_STYLES.SCREEN_HEIGHT * 0.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
    modalOptionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    modalOption: {
        width: '30%',
        padding: 10,
        margin: 5,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        alignItems: 'center',
    },
    modalOptionText: {
        fontSize: 16,
    },
});

export default CustomDatePicker;
