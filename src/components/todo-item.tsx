import {Component, Watch, Prop, Emit, Vue} from 'vue-property-decorator';
import './index.less';

interface Item {
  text: string;
  complete: boolean;
}

@Component({
  name: 'TodoItem',
})

export default class TodoItem extends Vue {
  // 使用类型断言手动去除null 和 undefined类型 语法是加上！
  @Prop(Object) public item!: Item;
  @Prop(Number) public index!: number;
  @Prop(Number) public edittingIndex!: number;

  public edittingContent: string = '';

  @Watch('edittingIndex')
  public edittingChange(index, oldIndex) {
    if (index === this.index) {
      this.edittingContent = this.item.text;
    } else {
      this.edittingContent = '';
    }
  }

  public edit(event) {
    event.stopPropagation();
    this.$emit('on-edit', this.index);
  }

  @Emit()
  public onEdit(event) {
    event.stopPropagation();
    return this.index;
  }

  public cancel(event) {
    event.stopPropagation();
    this.$emit('on-cancel');
  }

  // 第一种写法

  public save(event) {
    event.stopPropagation();
    this.$emit('on-save', {
      index: this.index,
      content: this.edittingContent,
    });
  }

  // 第二种写法
  @Emit('on-save')
  public saveInfo(index, content, event) {
    event.stopPropagation();
    return {
      index,
      content,
    };
  }

  public complete(event) {
    event.stopPropagation();
    this.$emit('on-complete', this.index);
  }

  protected render() {
    return (
      <li class='item-wrap'>
        {
          // this.item.text
          this.index === this.edittingIndex
            ? (<div>
              <a-input v-model={ this.edittingContent } style={'width：200px'} />
              <a-icon type='check' nativeOn-click={ this.save }></a-icon>
              <a-icon type='check' nativeOn-click={ this.saveInfo.bind(this, this.index, this.edittingContent) }></a-icon>
              <a-icon type='close' nativeOn-click={ this.cancel }></a-icon>
            </div>)
            : (<div>
              <span on-click={this.complete} style={ this.item.complete ? { textDecoration: 'line-through'} : ''}>{ this.item.text }</span>
              <a-icon type='edit' nativeOn-click={ this.edit }></a-icon>
              <a-icon type='close' nativeOn-click={ this.onEdit }></a-icon>
            </div>)
        }
      </li>
    );
  }
}
