<template>
    <div>
        <div class="toolbar">
            <i-form :model="search" inline>
                <form-item>
                    <i-button type="primary" icon="plus" @click="add">新增商家</i-button>
                </form-item>
                <form-item>
                    <i-input type="text" :value.sync="params.name" placeholder="商家名称"></i-input>
                </form-item>
                <form-item>
                    <i-input type="text" :value.sync="params.addr" placeholder="商家地址"></i-input>
                </form-item>
                <form-item>
                    <i-button type="primary" icon="ios-search" @click="search">搜索</i-button>
                </form-item>
            </i-form>
        </div>
        <i-table border :content="self" :columns="columns" :data="rows"></i-table>
        <div class="page-wrap">
            <Page :total="total" show-total :current.sync="params.page" @on-change="getData" :page-size="15"></Page>
        </div>
        <Modal :visible.sync="addModal" title="新增商家">
            <i-form v-ref:addformmodal :label-width="80" :model="addform" :rules="rules">
                <Form-item label="商家名称" prop="name">
                    <i-input :value.sync="addform.name" placeholder="商家名称"></i-input>
                </Form-item>
                <Form-item label="商家地址" prop="addr">
                    <i-input :value.sync="addform.addr" placeholder="商家地址"></i-input>
                </Form-item>
                <Form-item label="电话" prop="phone">
                    <i-input :value.sync="addform.phone" placeholder="电话"></i-input>
                </Form-item>
                <Form-item label="人均消费">
                    <i-input :value.sync="addform.avgprice" placeholder="人均消费"></i-input>
                </Form-item>
                <Form-item label="平均分">
                    <i-input :value.sync="addform.score" placeholder="平均分"></i-input>
                </Form-item>
                <Form-item label="经度">
                    <i-input :value.sync="addform.longitude" placeholder="经度"></i-input>
                </Form-item>
                <Form-item label="纬度">
                    <i-input :value.sync="addform.latitude" placeholder="纬度"></i-input>
                </Form-item>
            </i-form>
            <div slot="footer" class="modal-footer">
                <i-button size="large" type="text" @click="addModal=false">取消</i-button>
                <i-button size="large" type="primary" @click="create">确定</i-button>
            </div>
        </Modal>
        <Modal :visible.sync="editModal" title="编辑商家">
            <i-form v-ref:editformmodal :label-width="80" :model="editform" :rules="rules">
                <Form-item label="商家名称" prop="name">
                    <i-input :value.sync="editform.name" placeholder="商家名称"></i-input>
                </Form-item>
                <Form-item label="商家地址" prop="addr">
                    <i-input :value.sync="editform.addr" placeholder="商家地址"></i-input>
                </Form-item>
                <Form-item label="电话" prop="phone">
                    <i-input :value.sync="editform.phone" placeholder="电话"></i-input>
                </Form-item>
                <Form-item label="人均消费">
                    <i-input :value.sync="editform.avgprice" placeholder="人均消费"></i-input>
                </Form-item>
                <Form-item label="平均分">
                    <i-input :value.sync="editform.score" placeholder="平均分"></i-input>
                </Form-item>
                <Form-item label="经度">
                    <i-input :value.sync="editform.longitude" placeholder="经度"></i-input>
                </Form-item>
                <Form-item label="纬度">
                    <i-input :value.sync="editform.latitude" placeholder="纬度"></i-input>
                </Form-item>
            </i-form>
            <div slot="footer" class="modal-footer">
                <i-button size="large" type="text" @click="editModal=false">取消</i-button>
                <i-button size="large" type="primary" @click="update">确定</i-button>
            </div>
        </Modal>
        <Modal :visible.sync="viewModal" title="查看详情">
            <i-form :label-width="80">
                <Form-item label="商家名称">
                    {{viewform.name}}
                </Form-item>
                <Form-item label="商家地址">
                    {{viewform.addr}}
                </Form-item>
                <Form-item label="电话">
                    {{viewform.phone}}
                </Form-item>
                <Form-item label="人均消费">
                    {{viewform.avgprice}}
                </Form-item>
                <Form-item label="平均分">
                    {{viewform.score}}
                </Form-item>
                <Form-item label="经度">
                    {{viewform.longitude}}
                </Form-item>
                <Form-item label="纬度">
                    {{viewform.latitude}}
                </Form-item>
                <Form-item label="添加时间">
                    {{viewform.ctime | time}}
                </Form-item>
            </i-form>
            <div slot="footer" class="modal-footer">
                <i-button size="large" type="primary" @click="viewModal=false">确定</i-button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import util from '../../lib/util'
    export default {
        data() {
            return {
                params: {
                    name: '',
                    addr: '',
                    page: 1,
                    size: 15
                },
                total: 0,
                addModal: false,
                viewModal: false,
                editModal: false,
                self: this,
                rows: [],
                columns: [{
                    type: 'index',
                    width: 60,
                    align: 'center'
                }, {
                    title: '商家名称',
                    key: 'name',
                    width: 250
                }, {
                    title: '商家地址',
                    key: 'addr',
                    width: 400
                }, {
                    title: '人均',
                    key: 'avgprice',
                    width: 100,
                    render(row) {
                        return '￥' + row.avgprice
                    }
                }, {
                    title: '平均分',
                    key: 'score',
                    width: 200,
                    render(row) {
                        return `<Rate show-text :value="${row.score}" disabled><span class="rate-color">{{${row.score}}}</span></Rate>`
                    }
                }, {
                    title: '电话',
                    key: 'phone',
                    width: 200
                }, {
                    title: '操作',
                    key: 'option',
                    render(row, column, index) {
                        return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="primary" size="small" @click="edit(${index})">编辑</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`
                    }
                }],
                rules: {
                    name: [
                        { required: true, message: '商家名称不能为空', trigger: 'blur' }
                    ],
                    addr: [
                        { required: true, message: '商家地址不能为空', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '商家电话不能为空', trigger: 'blur' }
                    ]
                },
                index: 0,
                addform: {
                    name: '',
                    score: 0,
                    avgprice: 0,
                    addr: '',
                    phone: '',
                    longitude: 0,
                    latitude: 0
                },
                viewform: {
                    name: '',
                    score: 0,
                    avgprice: 0,
                    addr: '',
                    phone: '',
                    longitude: 0,
                    latitude: 0,
                    ctime: ''
                },
                editform: {
                    name: '',
                    score: 0,
                    avgprice: 0,
                    addr: '',
                    phone: '',
                    longitude: 0,
                    latitude: 0
                }
            }
        },
        computed: {

        },
        methods: {
            show(index) {
                this.viewform = this.rows[index]
                this.viewModal = true
            },
            edit(index) {
                this.index = index
                for (var key in this.editform) {
                    this.editform[key] = this.rows[index][key]
                }
                this.editModal = true
            },
            remove(index) {
                this.$Modal.confirm({
                    title: '确定要删除该记录吗？',
                    content: '<p>一旦删除不可恢复</p>',
                    onOk: () => {
                        util.post({
                            url: '/shop/remove',
                            data: {
                                _id: this.rows[index]._id
                            }
                        }).then(data => {
                            if (data.stat == 'OK') {
                                this.$Message.success('数据删除成功！', 3)
                                this.getData()
                            } else {
                                this.$Message.error(data.message, 3)
                            }
                        })
                    }
                })
            },
            search() {
                this.params.page = 1
                this.getData()
            },
            getData() {
                this.$Loading.start()
                util.post({
                    url: '/shop/list',
                    data: this.params
                }).then(data => {
                    this.$Loading.finish()
                    if (data.stat == 'OK') {
                        this.rows = data.rows
                        this.total = data.total
                    }
                })
            },
            add() {
                this.addModal = true
            },
            create() {
                this.$refs.addformmodal.validate(result => {
                    if (result == false) {
                        return
                    }
                    util.post({
                        url: '/shop/create',
                        data: this.addform
                    }).then(data => {
                        if (data.stat == 'OK') {
                            this.$refs.addformmodal.resetFields()
                            this.addModal = false
                            this.$Message.success('数据添加成功！', 3)
                            this.getData()
                        } else {
                            this.$Message.error(data.message)
                        }
                    })
                })
            },
            update() {
                this.$refs.editformmodal.validate(result => {
                    if (result == false) {
                        return
                    }
                    util.post({
                        url: '/shop/update',
                        data: {
                            _id: this.rows[this.index]._id,
                            data: this.editform
                        }
                    }).then(data => {
                        if (data.stat == 'OK') {
                            this.$refs.editformmodal.resetFields()
                            this.editModal = false
                            this.$Message.success('数据更新成功！', 3)
                            this.getData()
                        } else {
                            this.$Message.error(data.message, 3)
                        }
                    })
                })
            }
        },
        ready() {
            this.$Loading.config({
                height: 4
            })
            this.getData()
        }
    }

</script>