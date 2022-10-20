import { defineComponent } from 'vue';
import { Button } from '../../shared/Button';
import s from '../Welcome/StartPage.module.scss';
import { FloatButton } from '../../shared/FloatButton';
export const StartPage = defineComponent({
    setup: (props, context) => {
        const onClick = () => {
            console.log("hi")
        }
    return () => (
        <div class={s.button_wrapper}>
            <div>
            <Button class={s.button} onClick={onClick}>开始记账</Button>
            </div>
            <FloatButton/>
      </div>
    )
  }
})