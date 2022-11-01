import { defineComponent, PropType,ref } from 'vue';
import { Icon, IconName } from './icon';
import { DatetimePicker, Popup } from 'vant'
import s from './NumberPad.module.scss'
import dayjs from 'dayjs';
export const NumberPad = defineComponent({
    setup: (props, context) => {
        const now = new Date()
        const refDate = ref<Date>(now) 
        const minDate = new Date(2020, 0, 1)
        const maxDate = new Date(2030,11,31)
        
        const buttons = [
            { text: "1", onClick: () => { } },
            { text: "2", onClick: () => { } },
            { text: "3", onClick: () => { } },
            { text: "清空", onClick: () => { } },
            { text: "4", onClick: () => { } },
            { text: "5", onClick: () => { } },
            { text: "6", onClick: () => { } },
            { text: "+", onClick: () => { } },
            { text: "7", onClick: () => { } },
            { text: "8", onClick: () => { } },
            { text: "9", onClick: () => { } },
            { text: "-", onClick: () => { } },
            { text: ".", onClick: () => { } },
            { text: "0", onClick: () => { } },
            { text: "删", onClick: () => { } },
            { text: "提交", onClick: () => { } },
            
        ]
        const refDatePickerVisible = ref(false)
        const showDatePicker = () => refDatePickerVisible.value = true
        const hideDatePicker = () => refDatePickerVisible.value = false
        const setDate = (date: Date) => { refDate.value = date; hideDatePicker() }
        return () => (
            <>
                <div class={s.dateAndAmount}>
                    <span class={s.date}>
                        <Icon name='notes' class={s.icon}></Icon>
                        <span>
                        <span onClick={showDatePicker}>{dayjs(refDate.value).format('YYYY/MM/DD')}</span>
                            <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
                                <DatetimePicker value={refDate.value} type="date" title="选择年月日" min-date={minDate} max-date={maxDate}
                                    onConfirm={setDate} onCancel={hideDatePicker} />
                            </Popup>
                        </span>
                    </span>
                    <span class={s.amount}>199.12</span>  
                </div>

                <div class={s.buttons}>
                {buttons.map(button=>
                    <button onClick={button.onClick}>{button.text}
                    </button>)}

                </div>
        </>
    )
  }
})