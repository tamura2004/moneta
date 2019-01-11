class AccountsController < ApplicationController
  before_action :set_account, only: [:show, :update, :destroy]

  # GET /accounts
  def index
    @accounts = Account.all

    # render json: @accounts
    render 'index', formats: 'json', handlers: 'jbuilder'
  end

  # GET /accounts/1
  def show
    render 'show', formats: 'json', handlers: 'jbuilder'
  end

  # GET /talk
  def talk
    text = params[:text]
    msg = "こんにちは、私はmonetaです。"
    case text
    when /銀行/
      msg += "私の利用可能銀行は"
      msg += Bank.all.pluck(:name).join("と")
      msg += "です。"
    when /支店/
      msg += "私の利用可能支店は"
      Bank.all.each do |bank|
        msg += "、#{bank.name}銀行の"
        msg += bank.branches.pluck(:name).join("と")
      end
      msg += "です。"
    else
      accounts = Account.where("name like ?", "%#{text}%")
      accounts.each do |account|
        msg += "#{account.name}さんの現在の預金残高は、"
        msg += "#{account.statements.balance.to_s(:delimited)}円です。"
      end
    end
    render plain: msg
  end

  # GET /accounts/:id/balance
  def balance
    render json: @account.statements.balance
  end

  # POST /accounts
  def create
    @account = Account.new(account_params)
    @account.kind = '普通'
    @account.num = sprintf("%06d",rand(1000000))
    @account.statements.build({
      date: Time.now.to_date,
      kind: '入金',
      amount: 1_000_000,
      memo: '新規開設',
      total: 1_000_000,
    })

    if @account.save
      render json: @account, status: :created, location: @account
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /accounts/1
  def update
    if @account.update(account_params)
      render json: @account
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # DELETE /accounts/1
  def destroy
    @account.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def account_params
      params.require(:account).permit(:name, :kind, :num, :login_id, :hashed_password, :branch_id)
    end
end
