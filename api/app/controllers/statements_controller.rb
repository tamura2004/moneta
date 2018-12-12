class StatementsController < ApplicationController
  before_action :set_statement, only: [:show, :update, :destroy]

  # GET /statements
  def index
    @statements = Statement.all

    render json: @statements
  end

  # GET /statements/1
  def show
    render json: @statement
  end

  # POST /statements
  def create
    @statement = Statement.new(statement_params)

    if @statement.save
      render json: @statement, status: :created, location: @statement
    else
      render json: @statement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /statements/1
  def update
    if @statement.update(statement_params)
      render json: @statement
    else
      render json: @statement.errors, status: :unprocessable_entity
    end
  end

  # DELETE /statements/1
  def destroy
    @statement.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_statement
      @statement = Statement.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def statement_params
      params.require(:statement).permit(:date, :type, :amount, :memo, :total, :account_id)
    end
end
