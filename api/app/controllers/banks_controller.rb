class BanksController < ApplicationController
  before_action :set_bank, only: [:show, :update, :destroy]

  # GET /banks
  def index
    @banks = Bank.all

    render json: @banks
  end

  # GET /banks/1
  def show
    render json: @bank
  end

  # POST /banks
  def create
    @bank = Bank.new(bank_params)

    if @bank.save
      render json: @bank, status: :created, location: @bank
    else
      render json: @bank.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /banks/1
  def update
    if @bank.update(bank_params)
      render json: @bank
    else
      render json: @bank.errors, status: :unprocessable_entity
    end
  end

  # DELETE /banks/1
  def destroy
    @bank.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bank
      @bank = Bank.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bank_params
      params.require(:bank).permit(:num, :name)
    end
end
