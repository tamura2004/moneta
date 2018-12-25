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

  # GET /accounts/:id/balance
  def balance
    render json: @account.statements.balance
  end

  # POST /accounts
  def create
    @account = Account.new(account_params)
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
